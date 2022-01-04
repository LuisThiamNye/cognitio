export const getColor = state => colorState => (
    state.darkMode ? colorState.dark : colorState.light
);
