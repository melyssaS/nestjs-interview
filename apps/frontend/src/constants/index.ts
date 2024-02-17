export const NAV_LINKS = [
    { href: '/employee', key: 'employees', label: 'Employees' },
    { href: '/client', key: 'clients', label: 'Clients' },
    { href: '/timesheet', key: 'timesheets', label: 'Timesheets' },
];

export const CLIENT_FORM = [
    { label: 'Email', type: 'email', key: 'email' },
    { label: 'Company Name', type: 'text', key: 'companyName' },
    { label: 'Password', type: 'password', key: 'password' },
]

export const CLIENT_CARD = [
    { label: 'title', key: 'companyName' },
    { label: 'ID', key: 'id' },
    { label: 'Email', key: 'email' },
];

export const EMPLOYEE_FORM = [
    { label: 'Name', type: 'text', key: 'name' },
    { label: 'Pay Type', type: 'text', key: 'payType' },
    { label: 'Pay Amount', type: 'number', key: 'payAmount' },
];

export const EMPLOYEE_CARD = [
    { label: 'title', key: 'name' },
    { label: 'PAY TYPE', key: 'payType' },
    { label: 'PAY AMOUNT', key: 'payAmount' },
];