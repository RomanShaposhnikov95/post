let radios = document.querySelectorAll('input[type=radio][name="switch"]');
const weight = document.querySelector(".weight");
const totalWeight = document.querySelector(".total-weight");
const coefficient = document.querySelector(".coefficient");
let snapSlider = document.getElementById('snap');

noUiSlider.create(snapSlider, {
    start: 0,
    behaviour: 'snap',
    connect: [true, false],
    step: 1,
    range: {
        'min': 0,
        'max': 23
    },
    padding: [0, 1],
    pips: {
        mode: 'steps',
        density: 0,
        stepped: true
    }
});



Array.from(radios).forEach((radio) => {
    const w = radio.dataset.weight;
    const c = radio.dataset.coefficient;

    const updateValues = (sliderValue) => {
        const roundedValue = Math.round(sliderValue);
        weight.textContent = `${roundedValue * w} kg`;
        totalWeight.textContent = `${roundedValue * w * roundedValue} kg`;
        coefficient.textContent = `${roundedValue * c}`;
    };

    radio.addEventListener('change', () => {
        const sliderValue = snapSlider.noUiSlider.get();
        console.log(sliderValue);
        updateValues(sliderValue);
    });

    snapSlider.noUiSlider.on('change', (values, handle) => {
        const newValue = values[handle];
        if (radio.checked) {
            updateValues(newValue);
        }
    });
});




