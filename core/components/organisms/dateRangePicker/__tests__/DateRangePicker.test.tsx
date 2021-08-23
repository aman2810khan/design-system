import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { DateRangePicker } from '@/index';
import { DateRangePickerProps as Props } from '@/index.type';
import { Size } from '../../calendar';

const weeksList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const view = ['year', 'month', 'date'];
const booleanValue = [true, false];
const size: Size[] = ['large', 'small'];
const alignPosition = ['left', 'right'];
const numArray = [1, 2, 3];
const position = ['bottom',
  'top',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
  'left',
  'right'
];
const caption = 'testing caption';
const currentDate = new Date(2021, 8, 12);
const startDate = new Date(2020, 2, 3);
const endDate = new Date(2021, 5, 8);
const dateFormat = [currentDate, 1629790081880];
const inputFormat = ['mm/dd/yyyy',
  'dd/mm/yyyy',
  'yyyy/mm/dd',
  'mm-dd-yyyy',
  'dd-mm-yyyy',
  'yyyy-mm-dd'
];
const FunctionValue = jest.fn();

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    view: valueHelper(view, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    monthsInView: valueHelper(numArray, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    rangeLimit: valueHelper(7, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    withInput: valueHelper(booleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    open: valueHelper(booleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    jumpView: valueHelper(booleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    firstDayOfWeek: valueHelper(weeksList, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    disabledBefore: valueHelper(dateFormat[1], { required: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    disabledAfter: valueHelper(dateFormat[1], { required: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    yearNav: valueHelper(numArray, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    monthNav: valueHelper(numArray, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    contentAlign: valueHelper(alignPosition, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    startDate: valueHelper(dateFormat, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    endDate: valueHelper(dateFormat, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    singleInput: valueHelper(booleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    position: valueHelper(position, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    inputFormat: valueHelper(inputFormat, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    outputFormat: valueHelper(inputFormat, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          {...attr}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component prop:withInput', () => {

  it('show InputTrigger if prop:withInput is passed as true', () => {
    const { getByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
      />
    );

    expect(getByTestId('DesignSystem-DateRangePicker-InputTrigger')).toBeInTheDocument();
  });

  it('show InputTrigger if prop:withInput is passed as false', () => {
    render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={false}
      />
    );

    const inputTriggerComponent = screen.queryByText('DesignSystem-DateRangePicker-InputTrigger');
    expect(inputTriggerComponent).not.toBeInTheDocument();
  });
});

describe('DateRangePicker component prop:singleInput', () => {
  it('show SingleInputTrigger if prop:singleInput is passed as true', () => {
    const { getByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        singleInput={true}
        withInput={true}
      />
    );
    expect(getByTestId('DesignSystem-DateRangePicker-SingleInputTrigger')).toBeInTheDocument();
  });

  it('show correct label if prop:singleInput is passed as true', () => {
    const { getByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        singleInput={true}
        withInput={true}
      />
    );
    expect(getByTestId('DesignSystem-DateRangePicker-SingleInputTrigger').textContent).toMatch('Date');
  });
});

describe('DateRangePicker component prop:onRangeChange', () => {
  it('onClear Event handler ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
      />
    );

    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[1]);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('onChange Event handler ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
      />
    );

    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId[0], { target: { value: currentDate } });

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('onBlur Event handler ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
      />
    );

    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.blur(InputTestId[0]);

    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('DateRangePicker component update state ', () => {
  it('check for updating start date', () => {

    const { getAllByTestId, rerender } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
      />
    );

    const inputComponent = getAllByTestId('DesignSystem-Input');

    fireEvent.change(inputComponent[0], { target: { value: currentDate } });
    expect(FunctionValue).toHaveBeenCalled();

    rerender(
      <DateRangePicker
        startDate={currentDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
      />
    );
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for updating end date', () => {

    const { getAllByTestId, rerender } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
      />
    );

    const inputComponent = getAllByTestId('DesignSystem-Input');

    fireEvent.change(inputComponent[1], { target: { value: currentDate } });
    expect(FunctionValue).toHaveBeenCalled();

    rerender(
      <DateRangePicker
        startDate={startDate}
        endDate={currentDate}
        withInput={true}
        onRangeChange={FunctionValue}
      />
    );
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for updating open state', () => {

    const { rerender } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        open={true}
      />
    );

    expect(FunctionValue).toHaveBeenCalled();

    rerender(
      <DateRangePicker
        startDate={startDate}
        endDate={currentDate}
        withInput={true}
        onRangeChange={FunctionValue}
        open={false}
      />
    );
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for updating yearNav', () => {

    const { rerender } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        yearNav={2}
      />
    );

    expect(FunctionValue).toHaveBeenCalled();

    rerender(
      <DateRangePicker
        startDate={startDate}
        endDate={currentDate}
        withInput={true}
        onRangeChange={FunctionValue}
        yearNav={5}
      />
    );

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for updating monthNav', () => {

    const { rerender } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        monthNav={2}
      />
    );

    expect(FunctionValue).toHaveBeenCalled();

    rerender(
      <DateRangePicker
        startDate={startDate}
        endDate={currentDate}
        withInput={true}
        onRangeChange={FunctionValue}
        monthNav={5}
      />
    );

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for updating rangeLimit', () => {
    const { rerender } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        inputFormat="dd/mm/yyyy"
        rangeLimit={15}
        onRangeChange={FunctionValue}
      />
    );
    expect(FunctionValue).toHaveBeenCalled();
    rerender(
      <DateRangePicker
        startDate={'15/10/2021'}
        endDate={'20/10/2021'}
        inputFormat="dd/mm/yyyy"
        rangeLimit={2}
        onRangeChange={FunctionValue}
      />
    );
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('DateRangePicker component Event handlers with prop:singleInput set to True', () => {
  it('onClear Event handler ', () => {
    const { getByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        singleInput={true}
      />
    );

    const InputTestId = getByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('onChange Event handler ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        singleInput={true}
      />
    );

    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId[0], { target: { value: currentDate } });

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('onBlur Event handler ', () => {

    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        singleInput={true}
      />
    );

    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.blur(InputTestId[0]);

    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('DateRangePicker component classname with different prop:size', () => {
  size.forEach((sizeValue) => {
    it(`should have the Calendar--${sizeValue} class if size is passed as ${sizeValue}`, () => {
      const { getByTestId } = render(<DateRangePicker startDate={startDate} endDate={endDate} size={sizeValue} />);
      expect(getByTestId('DesignSystem-Calendar')).toHaveClass(`Calendar--${sizeValue}`);
    });
  });

  it('should have the class large as default value', () => {
    const { getByTestId } = render(<DateRangePicker startDate={startDate} endDate={endDate} />);
    expect(getByTestId('DesignSystem-Calendar')).toHaveClass('Calendar--large');
  });
});

describe('DateRangePicker component with prop:monthsInView', () => {
  it('check for calender component when monthsInView is passed as prop', () => {
    const { getAllByTestId } = render(<DateRangePicker startDate={startDate} endDate={endDate} monthsInView={5} />);
    expect(getAllByTestId('DesignSystem-Calendar')).toHaveLength(5);
  });

  it('check for calender--monthsInView prop default value', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.click(InputTestId[0]);
    expect(getAllByTestId('DesignSystem-Calendar')).toHaveLength(2);
  });
});

describe('DateRangePicker Component with overwrite class', () => {
  it('overwrite DesignSystem-Calendar-Wrapper class', () => {
    const { getByTestId } = render(<DateRangePicker startDate={startDate} endDate={endDate} className="DateRangePickerCustomClass" />);
    expect(getByTestId('DesignSystem-Calendar-Wrapper')).toHaveClass('DateRangePickerCustomClass');
  });
});

describe('DateRangePicker component with prop:endInputOptions', () => {
  it('check for placeholderChar property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{ placeholderChar: '#' }}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[1]);
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('##/##/####');
  });

  it('check for default endErrorMsg property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{ required: true }}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[1]);
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch('Invalid value');
  });

  it('check for placeholderChar property onBlur Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{ placeholderChar: '#' }}
        onRangeChange={(e) => FunctionValue(e, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.blur(InputTestId[1]);
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('06/08/2021');
  });

  it('check for placeholderChar property default value onBlur Event ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{}}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.blur(InputTestId[1]);
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('06/08/2021');
  });

  it('check for placeholderChar property onChange Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{ placeholderChar: '#' }}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId[1], { target: { value: currentDate } });
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('06/08/2021');
  });

  it('check for placeholderChar property default value onChange Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{}}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId[1], { target: { value: currentDate } });
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('06/08/2021');
  });

  it('check for placeholderChar property default value onClick Event ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{}}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.click(InputTestId[1]);
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('06/08/2021');
  });

  it('check for error property', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{ caption, error: true, required: true }}
        onRangeChange={FunctionValue}
      />
    );
    expect(getAllByTestId('DesignSystem-InputWrapper')[1]).toHaveClass('Input--error');
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch(caption);
  });
});

describe('DateRangePicker component with prop:startInputOptions', () => {
  it('check for placeholderChar property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        startInputOptions={{ placeholderChar: '#' }}
        onRangeChange={(e, value) => FunctionValue(e, value, 'start')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[0]);
    expect(getAllByTestId('DesignSystem-Input')[0]).toHaveValue('##/##/####');
  });

  it('check for default startErrorMsg property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        startInputOptions={{ required: true }}
        onRangeChange={(e, value) => FunctionValue(e, value, 'start')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[0]);
    expect(getAllByTestId('DesignSystem-Text')[0].textContent).toMatch('Invalid value');
  });

  it('check for error property', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        startInputOptions={{ caption, error: true, required: true }}
        onRangeChange={FunctionValue}
      />
    );
    expect(getAllByTestId('DesignSystem-InputWrapper')[0]).toHaveClass('Input--error');
    expect(getAllByTestId('DesignSystem-Text')[0].textContent).toMatch(caption);
  });
});

describe('DateRangePicker component with prop:inputOptions', () => {
  it('check for default startErrorMsg property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        inputOptions={{ required: true }}
        singleInput={true}
        onRangeChange={FunctionValue}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[0]);
    expect(getAllByTestId('DesignSystem-Text')[0].textContent).toMatch('Invalid value');
  });

  it('check for default caption property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        inputOptions={{ caption, required: true }}
        singleInput={true}
        onRangeChange={FunctionValue}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[0]);
    expect(getAllByTestId('DesignSystem-InputWrapper')[0]).toHaveClass('Input--error');
    expect(getAllByTestId('DesignSystem-Text')[0].textContent).toMatch(caption);
  });

  it('check for placeholderChar property default value onChange Event', () => {
    const { getByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        singleInput={true}
        inputOptions={{ placeholderChar: '#' }}
      />
    );
    const InputTestId = getByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId, { target: { value: '8/27/2021 - 09/14/2021' } });
    expect(getByTestId('DesignSystem-Input')).toHaveValue('#3/03/2020 - 06/08/2021');
  });

  it('check for placeholderChar property default value onChange Event', () => {
    const { getByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        singleInput={true}
        inputOptions={{ placeholderChar: '#' }}
        onRangeChange={(e, value) => FunctionValue(e, value)}
      />
    );
    const InputTestId = getByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId, { target: { value: '18/27/2021 - 19/14/2021' } });
    expect(getByTestId('DesignSystem-Input')).toHaveValue('03/03/2020 - 06/08/2021');
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('DateRangePicker component with prop:rangeLimit', () => {
  it('check for valid rangeLimit', () => {
    render(
      <DateRangePicker
        startDate={'15/10/2021'}
        endDate={'20/10/2021'}
        inputFormat="dd/mm/yyyy"
        rangeLimit={2}
        onRangeChange={FunctionValue}
      />
    );
    // expect(getAllByTestId('designSystem-Calendar-WrapperClass')[5])
    // .toHaveClass('Calendar-valueWrapper--inRangeError');
    expect(FunctionValue).toHaveBeenCalled();
  });
});
