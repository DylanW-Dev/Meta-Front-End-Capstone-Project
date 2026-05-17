export const initializeTimes = () => {
    const saved = localStorage.getItem('availableTimes');
    if (saved) {
        return JSON.parse(saved);
    }
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const newTimes = initializeTimes();
            localStorage.setItem('availableTimes', JSON.stringify(newTimes));
            return newTimes;
        default:
            return state;
    }
};
