import {screen, render, fireEvent} from '@testing-library/react'
import Header from './Header'

describe('<Header />', () => {
  const mockCurrentUser = {
    firstName: "Lorem",
    lastName: "Ipsum",
    email: "lorem.ipsum@dolor.sit",
    password: "Ddddd1|",
    showPassword: false
  }

  it('Display the Star Wars Logo', () => {
    render(<Header />)
    expect(screen.getByAltText("Star Wars Logo")).toHaveAttribute(
      "src", "sw_logo.png"
    )
  })
  
  it('Render Log in and Sign up links when user not logged', () => {
    render(<Header />)
    expect(screen.getByText(/Log in/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument()
  })
  
  it('Render user name and log out when user is logged', () => {
    render(<Header currentUser={mockCurrentUser} />)
    expect(screen.getByText(/Hi Lorem/i)).toBeInTheDocument()
    expect(screen.getByText(/log out/i)).toBeInTheDocument()
  })

  it('Open Log in form', () => {
    render(<Header />)
    const loginLinkEl = screen.getByText(/Log in/i)
    fireEvent.click(loginLinkEl)
    expect(screen.getByText(/Send/i)).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { id: "showPassword" })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { id: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { id: "password" })).toBeInTheDocument()
  })

  it('Open Sign up form', () => {
    render(<Header />)
    const loginLinkEl = screen.getByText(/Sign up/i)
    fireEvent.click(loginLinkEl)
    expect(screen.getByText(/Create Account/i)).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { id: "showPassword" })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/last name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
  })
})