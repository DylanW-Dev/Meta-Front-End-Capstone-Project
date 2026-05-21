import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './bookingUtils';

beforeEach(() => {
    window.fetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    localStorage.clear();
});

// localStorage Tests
test('initializeTimes reads from localStorage if available', () => {
    const stored = ['18:00', '19:00'];
    localStorage.setItem('availableTimes', JSON.stringify(stored));
    const times = initializeTimes();
    expect(times).toEqual(stored);
});

test('initializeTimes returns default times if localStorage is empty', () => {
    const times = initializeTimes();
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes writes to localStorage', () => {
    const state = [];
    const action = { type: 'UPDATE_TIMES' };
    updateTimes(state, action);
    const stored = JSON.parse(localStorage.getItem('availableTimes'));
    expect(Array.isArray(stored)).toBe(true);
    expect(stored.length).toBeGreaterThan(0);
});

// Mock props
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();
const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const renderBookingForm = () => {
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            dispatch={mockDispatch}
            submitForm={mockSubmitForm}
        />
    );
};

// Static Text Tests
test('Renders the submit button with correct text', () => {
    renderBookingForm();
    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
});

test('Renders all form labels', () => {
    renderBookingForm();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Choose date')).toBeInTheDocument();
    expect(screen.getByText('Choose time')).toBeInTheDocument();
    expect(screen.getByText('Number of guests')).toBeInTheDocument();
    expect(screen.getByText('Occasion')).toBeInTheDocument();
});

// Form Submission Test
test('Form can be submitted by the user', () => {
    renderBookingForm();
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2025-06-20' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '3' } });
    fireEvent.click(screen.getByText('Reserve a Table'));
    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
});

// bookingUtils Tests
test('initializeTimes returns a non-empty array', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns available times for a selected date', () => {
    const state = mockAvailableTimes;
    const action = { type: 'UPDATE_TIMES', payload: new Date('2025-06-20') };
    const result = updateTimes(state, action);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});

// Attribute Tests
describe('HTML5 Validation Attributes', () => {
    test('first name input has required attribute', () => {
        renderBookingForm();
        const firstNameInput = screen.getByLabelText('First Name');
        expect(firstNameInput).toHaveAttribute('required');
    });

    test('last name input has required attribute', () => {
        renderBookingForm();
        const lastNameInput = screen.getByLabelText('Last Name');
        expect(lastNameInput).toHaveAttribute('required');
    });

    test('date input has required and min attributes', () => {
        renderBookingForm();
        const dateInput = screen.getByLabelText('Choose date');
        expect(dateInput).toHaveAttribute('required');
        expect(dateInput).toHaveAttribute('min');
    });

    test('time select has required attribute', () => {
        renderBookingForm();
        const timeSelect = screen.getByLabelText('Choose time');
        expect(timeSelect).toHaveAttribute('required');
    });

    test('guests input has required, min="1" and max="10" attributes', () => {
        renderBookingForm();
        const guestsInput = screen.getByLabelText('Number of guests');
        expect(guestsInput).toHaveAttribute('required');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });

});

// JavaScript Validation Tests for Date
describe('Date field validation', () => {

    test('shows error when date is empty', () => {
        renderBookingForm();
        const dateInput = screen.getByLabelText('Choose date');
        // First set a value, then clear it to trigger validation
        fireEvent.change(dateInput, { target: { id: 'date', value: '2099-12-31' } });
        fireEvent.change(dateInput, { target: { id: 'date', value: '' } });
        fireEvent.blur(dateInput);
        expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
    });

    test('shows error when date is in the past', () => {
        renderBookingForm();
        const dateInput = screen.getByLabelText('Choose date');
        fireEvent.change(dateInput, { target: { id: 'date', value: '2000-01-01' } });
        fireEvent.blur(dateInput);
        expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
    });

    test('shows no error when date is valid', () => {
        renderBookingForm();
        const dateInput = screen.getByLabelText('Choose date');
        fireEvent.change(dateInput, { target: { id: 'date', value: '2099-12-31' } });
        fireEvent.blur(dateInput);
        expect(screen.queryByText(/please select a date/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/date cannot be in the past/i)).not.toBeInTheDocument();
    });

});

// JavaScript Validation Tests for Time
describe('Time field validation', () => {

    test('shows error when time is not selected', () => {
        renderBookingForm();
        const timeSelect = screen.getByLabelText('Choose time');
        fireEvent.change(timeSelect, { target: { id: 'time', value: '' } });
        fireEvent.blur(timeSelect);
        expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
    });

    test('shows no error when time is selected', () => {
        renderBookingForm();
        const timeSelect = screen.getByLabelText('Choose time');
        fireEvent.change(timeSelect, { target: { id: 'time', value: '18:00' } });
        fireEvent.blur(timeSelect);
        expect(screen.queryByText(/please select a time/i)).not.toBeInTheDocument();
    });

});

// Validation Tests for Guests
describe('Guests field validation', () => {

    test('shows error when guests is below 1', () => {
        renderBookingForm();
        const guestsInput = screen.getByLabelText('Number of guests');
        fireEvent.change(guestsInput, { target: { id: 'guests', value: '0' } });
        fireEvent.blur(guestsInput);
        expect(screen.getByText(/at least 1 guest is required/i)).toBeInTheDocument();
    });

    test('shows error when guests exceeds 10', () => {
        renderBookingForm();
        const guestsInput = screen.getByLabelText('Number of guests');
        fireEvent.change(guestsInput, { target: { id: 'guests', value: '11' } });
        fireEvent.blur(guestsInput);
        expect(screen.getByText(/maximum 10 guests allowed/i)).toBeInTheDocument();
    });

    test('shows no error when guests is valid', () => {
        renderBookingForm();
        const guestsInput = screen.getByLabelText('Number of guests');
        fireEvent.change(guestsInput, { target: { id: 'guests', value: '4' } });
        fireEvent.blur(guestsInput);
        expect(screen.queryByText(/at least 1 guest is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/maximum 10 guests allowed/i)).not.toBeInTheDocument();
    });

});

// Form Submission Validation Tests
describe('Form submission validation', () => {

    // Button aria-label is "Submit reservation" not "Reserve a Table"
    test('submit button is disabled when form is empty', () => {
        renderBookingForm();
        const button = screen.getByRole('button', { name: /submit reservation/i });
        expect(button).toBeDisabled();
    });

    test('submit button is enabled when required fields are valid', () => {
        renderBookingForm();
        fireEvent.change(screen.getByLabelText('First Name'),
            { target: { id: 'firstName', value: 'John' } });
        fireEvent.change(screen.getByLabelText('Last Name'),
            { target: { id: 'lastName', value: 'Doe' } });
        fireEvent.change(screen.getByLabelText('Choose date'),
            { target: { id: 'date', value: '2099-12-31' } });
        fireEvent.change(screen.getByLabelText('Choose time'),
            { target: { id: 'time', value: '18:00' } });
        fireEvent.change(screen.getByLabelText('Number of guests'),
            { target: { id: 'guests', value: '4' } });
        const button = screen.getByRole('button', { name: /submit reservation/i });
        expect(button).toBeEnabled();
    });

    test('submitForm is called with correct data on valid submission', () => {
        renderBookingForm();
        fireEvent.change(screen.getByLabelText('First Name'),
            { target: { id: 'firstName', value: 'John' } });
        fireEvent.change(screen.getByLabelText('Last Name'),
            { target: { id: 'lastName', value: 'Doe' } });
        fireEvent.change(screen.getByLabelText('Choose date'),
            { target: { id: 'date', value: '2099-12-31' } });
        fireEvent.change(screen.getByLabelText('Choose time'),
            { target: { id: 'time', value: '18:00' } });
        fireEvent.change(screen.getByLabelText('Number of guests'),
            { target: { id: 'guests', value: '4' } });
        fireEvent.click(screen.getByRole('button', { name: /submit reservation/i }));
        expect(mockSubmitForm).toHaveBeenCalledWith({
            firstName: 'John',
            lastName: 'Doe',
            date: '2099-12-31',
            time: '18:00',
            guests: '4',
            occasion: ''
        });
    });

});
