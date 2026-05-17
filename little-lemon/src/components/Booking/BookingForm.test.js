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
    expect(screen.getByText('Choose date')).toBeInTheDocument();
    expect(screen.getByText('Choose time')).toBeInTheDocument();
    expect(screen.getByText('Number of guests')).toBeInTheDocument();
    expect(screen.getByText('Occasion')).toBeInTheDocument();
});

// Form Submission Test
test('Form can be submitted by the user', () => {
    renderBookingForm();
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
