import React from "react";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import { shallow } from 'enzyme';

test('should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={2350987456} />);
    expect(wrapper).toMatchSnapshot();
});


