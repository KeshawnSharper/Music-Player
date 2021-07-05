import { render,screen,cleanup} from '@testing-library/react'
import { mount,configure,equals,shallow,simulate } from 'enzyme';
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

import Login from "../Login/Login"
const LoginComponent = mount(<Login />);

test("Should render Login component",() => {
    expect(LoginComponent.exists('.grid')).to.equal(true);

})
test("Should render Login component",() => {
    expect(LoginComponent.exists('.gri')).to.equal(false);

})
test("Should change text in component",() => {
    LoginComponent.find('#login__username').simulate('click')
    expect(LoginComponent.find('.error_message').text()).to.equal("Email and/or password doesn't meet requirements, Try again ");

})