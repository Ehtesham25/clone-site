import limitedCompany from "../../assets/limitedCompany.png"
import partnership from "../../assets/partnership.png"
import ind from "../../assets/ind.png"

export const accountServices = ['Bookkeeping', 'Payroll', 'Statutory Accounts', 'Management Accounts', 'Cashflow Forecasts']
export const taxServices = ['Corporation Tax', 'VAT', 'Management Accounts', 'HMRC Enquiry', 'Capital Gains Tax']
export const companySec = ['Company Formation', 'Confirmation Statements', 'Company Dissolution', 'Share issuance ', 'Registered Office']

export const work = [
    {
        title: 'Individuals and Partnership',
        img: ind,
        listItem: ['Self-employed Accounts', 'Partnership Accounts', 'Landlords', 'Foreign Income', 'Construction Workers']
    },
    {
        title: 'Limited Companies',
        img: limitedCompany,
        listItem: ['Start ups', 'Contractors', 'Personal Service Companies', 'SPV’s']
    },
    {
        title: 'Charities',
        img: partnership,
        listItem: ['Charities', 'Limited by Guarantee Company', 'CIO’s']
    },
]