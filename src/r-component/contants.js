import React, { Components } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { RcomponentLayout } from '.';
import RcButton from './button';
import RcInput from './input';
import RcCheckBox from './checkbox';
import RcRadio from './radio';
import RcSelect from './select';
import RcModal from './modal';
import RcDropdown from './dropdown';
import RcDrawer from './drawer';
import RcPopComfirm from './pop-comfirm';
import RcMessage from './message';
import RcForm from './form';
import RcAlert from './alert';
import RcMenu from './menu';
import RcTable from './table';

const rcomponents = [
    {
        path: '/rc-components/buttons',
        name: 'Buttons'
    },
    {
        path: '/rc-components/inputs',
        name: 'Inputs'
    },
    {
        path: '/rc-components/checkboxs',
        name: 'Checkboxs'
    },
    {
        path: '/rc-components/radios',
        name: 'Radios'
    },
    {
        path: '/rc-components/selects',
        name: 'Selects'
    },
    {
        path: '/rc-components/forms',
        name: 'Fomrs'
    },
    {
        path: '/rc-components/modals',
        name: 'Modals'
    },
    {
        path: '/rc-components/dropdowns',
        name: 'Dropdowns'
    },
    {
        path: '/rc-components/drawers',
        name: 'Drawers'
    },
    {
        path: '/rc-components/pop-confirms',
        name: 'PopConfirms'
    },
    {
        path: '/rc-components/messages',
        name: 'Messages'
    },
    {
        path: '/rc-components/alerts',
        name: 'Alerts'
    },
    {
        path: '/rc-components/menus',
        name: 'Menus'
    },
    {
        path: '/rc-components/tables',
        name: 'Tables'
    },
    
]

const routeRcomponents = [
    {
        path: '/rc-components/buttons',
        component: RcButton
    },
    {
        path: '/rc-components/inputs',
        component: RcInput
    },
    {
        path: '/rc-components/checkboxs',
        component: RcCheckBox
    },
    {
        path: '/rc-components/radios',
        component: RcRadio
    },
    {
        path: '/rc-components/selects',
        component: RcSelect
    },
    {
        path: '/rc-components/forms',
        component: RcForm
    },
    {
        path: '/rc-components/modals',
        component: RcModal
    },
    {
        path: '/rc-components/dropdowns',
        component: RcDropdown
    },
    {
        path: '/rc-components/drawers',
        component: RcDrawer
    },
    {
        path: '/rc-components/pop-confirms',
        component: RcPopComfirm
    },
    {
        path: '/rc-components/messages',
        component: RcMessage
    },
    {
        path: '/rc-components/alerts',
        component: RcAlert
    },
    {
        path: '/rc-components/menus',
        component: RcMenu
    },
    {
        path: '/rc-components/tables',
        component: RcTable
    },
]


const Rcomponent = ({ Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props => (
                <RcomponentLayout>
                    <Component {...props} />
                </RcomponentLayout>
            )
        }
    />
)

export {
    rcomponents,
    routeRcomponents
}
 
export default Rcomponent