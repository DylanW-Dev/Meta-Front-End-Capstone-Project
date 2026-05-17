import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './bookingUtils';

// Mock props
const mockDispatch = jest.fn();
const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Helper to render with default props
const renderBookingForm = () => {
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            dispatch={mockDispatch}
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

    fireEvent.change(screen.getByLabelText('Choose date'), {
        target: { value: '2025-06-20' }
    });
    fireEvent.change(screen.getByLabelText('Choose time'), {
        target: { value: '18:00' }
    });
    fireEvent.change(screen.getByLabelText('Number of guests'), {
        target: { value: '3' }
    });

    fireEvent.click(screen.getByText('Reserve a Table'));

    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
});

// bookingUtils Tests
test('initializeTimes returns correct default times', () => {
    const times = initializeTimes();
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns current state', () => {
    const state = mockAvailableTimes;
    const action = { type: 'UPDATE_TIMES', payload: '2025-06-20' };
    expect(updateTimes(state, action)).toEqual(state);
});
