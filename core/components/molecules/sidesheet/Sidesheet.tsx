import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Column, Backdrop, OutsideClick, Button, Tooltip } from '@/index';
import { ColumnProps } from '@/index.type';
import { OverlayFooter } from '@/components/molecules/overlayFooter';
import { OverlayHeader, OverlayHeaderProps } from '@/components/molecules/overlayHeader';
import { OverlayBody } from '@/components/molecules/overlayBody';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { getWrapperElement, getUpdatedZIndex, closeOnEscapeKeypress } from '@/utils/overlayHelper';
import OverlayManager from '@/utils/OverlayManager';
import { FooterOptions } from '@/common.type';

export type SidesheetDimension = 'regular' | 'large';

export interface SidesheetProps extends BaseProps {
  /**
   * Header options (doesn't work if `header` prop is used)
   *
   * Use `header` prop if custom header is needed.
   *
   * <pre className="DocPage-codeBlock">
   * Header:
   * {
   *    heading: string;
   *    subHeading?: string;
   *    backIcon?: boolean;
   *    backIconCallback?: (e) => void;
   *    backButton?: boolean;
   *    backButtonCallback?: (e) => void;
   * }
   * </pre>
   *
   * **`backIcon` and `backIconCallback` will soon be deprecated**
   *
   * | Name | Description |
   * | --- | --- |
   * | heading | Heading of `Sidesheet` |
   * | subHeading | Subheading of `Sidesheet` |
   * | backButton | Determines if back button is visible |
   * | backButtonCallback | Callback called when back button is clicked |
   * | backIcon | Determines if back button is visible |
   * | backIconCallback | Callback called when back button is clicked |
   */
  headerOptions: Omit<OverlayHeaderProps, 'onClose'>;
  /**
   * header component to be used as sidesheet header.
   * close button is not part of header so it will not be replaced.
   */
  header?: React.ReactNode;
  /**
   * Dimension of `Sidesheet`
   *
   * Dimension: `large` | `regular`
   */
  dimension: SidesheetDimension;
  /**
   * Handles open/close state
   */
  open: boolean;
  /**
   * Determines if footer is sticked at bottom
   */
  stickFooter?: boolean;
  /**
   * Show dividers in the header and the footer.
   */
  seperator?: boolean;
  /**
   * Element to be rendered
   */
  children?: React.ReactNode;
  /**
   * Footer component inside `Sidesheet`
   */
  footer?: React.ReactNode;
  /**
   * Footer options (doesn't work if `footer` prop is used).
   *
   * Use `footer` prop if custom footer is needed.
   * <pre className="DocPage-codeBlock">
   *  OverlayFooterOptions {
   *    actions: ButtonProps[];
   *  }
   * ([ButtonProps](https://innovaccer.github.io/design-system/?path=/docs/components-button-all--all))
   * </pre>
   */
  footerOptions?: FooterOptions;
  /**
   * Determined close event on backdrop click
   */
  backdropClose?: boolean;
  /**
   * Closes `Sidesheet` when `Escape` key is pressed
   */
  closeOnEscape?: boolean;
  /**
   * Callback called `Sidesheet` is closed
   */
  onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
}

interface SidesheetState {
  open: boolean;
  animate: boolean;
  zIndex?: number;
}

const sidesheetWidth: Record<SidesheetDimension, ColumnProps['size']> = {
  regular: '6',
  large: '10',
};

class Sidesheet extends React.Component<SidesheetProps, SidesheetState> {
  sidesheetRef = React.createRef<HTMLDivElement>();
  element: Element;

  static defaultProps = {
    dimension: 'regular',
    stickFooter: false,
    headerOptions: {},
  };

  constructor(props: SidesheetProps) {
    super(props);

    this.element = getWrapperElement();

    this.state = {
      open: props.open,
      animate: props.open,
    };

    this.onOutsideClickHandler = this.onOutsideClickHandler.bind(this);
  }

  onCloseHandler = (event: KeyboardEvent) => {
    const isTopOverlay = OverlayManager.isTopOverlay(this.sidesheetRef.current);
    closeOnEscapeKeypress(event, isTopOverlay, this.onOutsideClickHandler);
  };

  componentDidMount() {
    if (this.props.closeOnEscape) {
      if (this.state.open) {
        OverlayManager.add(this.sidesheetRef.current);
      }
      document.addEventListener('keydown', this.onCloseHandler);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEscape) {
      document.removeEventListener('keydown', this.onCloseHandler);
    }
  }

  componentDidUpdate(prevProps: SidesheetProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        const zIndex = getUpdatedZIndex({
          element: this.element,
          containerClassName: '.Overlay-container--open',
          elementRef: this.sidesheetRef,
        });

        this.setState({
          zIndex,
          open: true,
          animate: true,
        });

        if (this.props.closeOnEscape) OverlayManager.add(this.sidesheetRef.current);
      } else {
        this.setState({
          animate: false,
        });

        if (this.props.closeOnEscape) OverlayManager.remove(this.sidesheetRef.current);
      }
    }
  }

  onOutsideClickHandler(event: Event) {
    const { onClose } = this.props;
    const { open } = this.state;

    if (open) {
      if (this.props.closeOnEscape) OverlayManager.remove(this.sidesheetRef.current);
      if (onClose) onClose(event, 'OutsideClick');
    }
  }

  handleAnimationEnd() {
    if (!this.state.animate) {
      this.setState({
        open: false,
      });
    }
  }

  render() {
    const { animate, open, zIndex } = this.state;
    const {
      className,
      backdropClose,
      dimension,
      footer,
      seperator,
      stickFooter,
      headerOptions,
      footerOptions,
      header,
      onClose,
    } = this.props;

    const BackdropZIndex: number = zIndex ? zIndex - 1 : 1000;

    const classes = classNames(
      {
        Sidesheet: true,
        'Sidesheet--open': open,
        'Sidesheet-animation--open': animate,
        'Sidesheet-animation--close': !animate,
      },
      className
    );

    const ContainerClass = classNames({
      ['Overlay-container']: true,
      ['fade-in']: animate,
      ['Overlay-container--open']: animate,
      ['Overlay-container--close']: !animate,
    });

    const headerClass = classNames({
      ['Sidesheet-header']: true,
      ['Sidesheet-header--withSeperator']: seperator,
    });

    const footerClass = classNames({
      ['Sidesheet-footer']: true,
      ['Sidesheet-footer--withSeperator']: seperator,
      ['Sidesheet-footer--stickToBottom']: stickFooter,
    });

    const bodyClass = classNames({
      ['Sidesheet-body']: true,
      ['Sidesheet-body--withMargin']: !!footer && stickFooter,
    });

    const headingClass = classNames({
      ['Sidesheet-header--shiftRight']: headerOptions?.backButton || headerOptions?.backIcon,
      ['Sidesheet-header--shiftLeft']: !headerOptions?.backButton && !headerOptions?.backIcon,
    });

    const baseProps = extractBaseProps(this.props);

    const SidesheetContainer = (
      <Row
        data-test="DesignSystem-SidesheetContainer"
        className={ContainerClass}
        data-layer={true}
        style={{ zIndex }}
        ref={this.sidesheetRef}
        onAnimationEnd={this.handleAnimationEnd}
      >
        <Column data-test="DesignSystem-Sidesheet" {...baseProps} className={classes} size={sidesheetWidth[dimension]}>
          <div className={headerClass}>
            <Column data-test="DesignSystem-Sidesheet--Header">
              {!header && <OverlayHeader headingClass={headingClass} {...headerOptions} />}

              {!!header && header}
            </Column>
            <Column className="flex-grow-0">
              <Tooltip tooltip="Close">
                <Button
                  icon="close"
                  appearance="transparent"
                  data-test="DesignSystem-Sidesheet--CloseButton"
                  onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    if (onClose) onClose(event, 'IconClick');
                  }}
                />
              </Tooltip>
            </Column>
          </div>
          <OverlayBody data-test="DesignSystem-Sidesheet--OverlayBody" className={bodyClass}>
            {this.props.children}
          </OverlayBody>
          {(!!footer || !!footerOptions) && (
            <OverlayFooter
              data-test="DesignSystem-Sidesheet--Footer"
              {...footerOptions}
              open={open}
              className={footerClass}
            >
              {footer}
            </OverlayFooter>
          )}
        </Column>
      </Row>
    );

    const SidesheetWrapper = backdropClose ? (
      <OutsideClick data-test="DesignSystem-Sidesheet--OutsideClick" onOutsideClick={this.onOutsideClickHandler}>
        {SidesheetContainer}
      </OutsideClick>
    ) : (
      SidesheetContainer
    );

    const WrapperElement = ReactDOM.createPortal(SidesheetWrapper, this.element);

    return (
      <>
        {WrapperElement}
        <Backdrop open={this.state.animate} zIndex={BackdropZIndex} />
      </>
    );
  }
}

export default Sidesheet;
