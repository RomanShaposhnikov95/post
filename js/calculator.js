let radios = document.querySelectorAll('input[type=radio][name="switch"]');
const weight = document.querySelector(".weight");
const totalWeight = document.querySelector(".total-weight");
const coefficient = document.querySelector(".coefficient");
let snapSlider = document.getElementById('snap');
let nonStandardWrap = document.getElementById('non-standard');

let nonStandardLength = document.getElementById('non-standard-length');
let nonStandardWidth = document.getElementById('non-standard-width');
let nonStandardWeight = document.getElementById('non-standard-weight');


noUiSlider.create(snapSlider, {
    start: 0,
    behaviour: 'snap',
    connect: [true, false],
    step: 1,
    range: {
        'min': 0,
        'max': 34
    },
    padding: [0, 1],
    pips: {
        mode: 'steps',
        density: 0,
        stepped: true
    }
});


let select = document.getElementById('input-select');

for (let i = 0; i <= 33; i++) {

    let option = document.createElement("option");
    option.text = i;
    option.value = i;

    select.appendChild(option);
}


Array.from(radios).forEach((radio) => {
    const w = radio.dataset.weight;
    const c = radio.dataset.coefficient;
    const t = radio.dataset.type;

    let oldLength = 0;
    let oldWidth = 0;
    let oldWeight = 0;

    const updateValues = (sliderValue) => {
        const roundedValue = Math.round(sliderValue);
        weight.textContent = `${w} kg`;
        totalWeight.textContent = `${w * roundedValue} kg`;
        coefficient.textContent = `${(roundedValue * c).toFixed(2)}`;
    };

    const updateNoNonStandardValues = (nsLength, nsWidth, nsWeight, sliderValue) => {

        if (nsLength !== null) oldLength = nsLength;

        if (nsWidth !== null) oldWidth = nsWidth;

        if (nsWeight !== null) oldWeight = nsWeight;

        const roundedValue = Math.round(sliderValue);
        weight.textContent = `${oldWeight} kg`;
        totalWeight.textContent = `${oldWeight * roundedValue} kg`;
        coefficient.textContent = `${(oldLength * oldWidth * roundedValue).toFixed(2)}`;
    };

    radio.addEventListener('change', () => {
        const sliderValue = snapSlider.noUiSlider.get();

        if (t === "false") {
            nonStandardWrap.classList.remove('d-none')

            weight.textContent = `0 kg`;
            totalWeight.textContent = `0 kg`;
            coefficient.textContent = `0`;

            nonStandardLength.value = ""
            nonStandardWidth.value = ""
            nonStandardWeight.value = ""

        } else {
            nonStandardWrap.classList.add('d-none')
            updateValues(sliderValue);
        }
    });

    snapSlider.noUiSlider.on('change', (values, handle) => {
        const newValue = values[handle];
        if (radio.checked) {
           if (t === "false") {
               updateNoNonStandardValues(null, null, null, newValue);
           } else {
               updateValues(newValue);
           }
        }
    });

    snapSlider.noUiSlider.on('update', function (values, handle) {
        const newValue = values[handle];
        select.value = Math.round(newValue);

        if (radio.checked) {
            if (t === "false") {
                updateNoNonStandardValues(null, null, null, newValue);
            } else {
                updateValues(newValue);
            }
        }
    });

    select.addEventListener('change', function () {
        snapSlider.noUiSlider.set([this.value, null]);

    });

    nonStandardLength.addEventListener("input", (e) => {
        const sliderValue = snapSlider.noUiSlider.get();
        const value = Number(e.target.value);
        updateNoNonStandardValues(value, null, null, sliderValue);
    })

    nonStandardWidth.addEventListener("input", (e) => {
        const sliderValue = snapSlider.noUiSlider.get();
        const value = Number(e.target.value);
        updateNoNonStandardValues(null, value, null, sliderValue);
    })

    nonStandardWeight.addEventListener("input", (e) => {
        const sliderValue = snapSlider.noUiSlider.get();
        const value = Number(e.target.value)
        updateNoNonStandardValues(null, null, value, sliderValue);
    })
});






