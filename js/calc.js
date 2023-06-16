let radios = document.querySelectorAll('input[type=radio][name="switch"]');
const weight = document.querySelector(".weight");
const totalWeight = document.querySelector(".total-weight");
const coefficient = document.querySelector(".coefficient");
let snapSlider = document.getElementById('snap');
let nonStandardWrap = document.getElementById('non-standard');

let nonStandardLength = document.getElementById('non-standard-length');
let nonStandardWidth = document.getElementById('non-standard-width');
let nonStandardWeight = document.getElementById('non-standard-weight');
let select = document.getElementById('input-select');

noUiSlider.create(snapSlider, {
    start: 0,
    behaviour: 'snap',
    connect: [true, false],
    step: 1,
    range: {
        'min': 0,
        'max': 33
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
    const t = radio.dataset.type;
    const qty = radio.dataset.qty;

    let oldLength = 0;
    let oldWidth = 0;
    let oldWeight = 0;

    window.addEventListener("DOMContentLoaded", (event) => {
        const sliderValue = snapSlider.noUiSlider.get();
        if (radio.checked) {
            updateValues(sliderValue);
            selectOptions(33)
        }
    });

    radio.addEventListener('change', function () {
        select.innerHTML = ""

        selectOptions(Number(qty))
    });


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

        // calculate some shit

        let countWidth = Math.min(oldLength, oldWidth);
        let countLength = Math.max(oldLength, oldWidth);
        let pcsWidth = parseInt(2.4 / countWidth);
        let pcsLength = parseInt(13.6 / countLength);
        let maxCountDimens = pcsWidth * pcsLength;
        let maxCountWeight = parseInt(24000 / nsWeight);
        let res = Math.min(maxCountDimens, maxCountWeight)
        selectOptions(res);
        //console.log(maxCountDimens, maxCountWeight, res);

        let r = oldLength * oldWidth * sliderValue / 2.4;
        let o = oldWeight / 1000 / 1.84;
        let a = Math.max(r, o);
        a = Math.round(100 * a) / 100;
        coefficient.textContent = a;
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

    snapSlider.noUiSlider.on('update', (values, handle) => {
        const newValue = values[handle];
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
        const max = Number(nonStandardLength.getAttribute("max"))
        const value = Number(e.target.value);
        if (value > max) {
            nonStandardLength.value = max
        }
        const sliderValue = snapSlider.noUiSlider.get();
        updateNoNonStandardValues(value, null, null, sliderValue);
    })

    nonStandardWidth.addEventListener("input", (e) => {
        const sliderValue = snapSlider.noUiSlider.get();
        const max = Number(nonStandardWidth.getAttribute("max"))
        const value = Number(e.target.value);
        if (value > max) {
            nonStandardWidth.value = max
        }
        updateNoNonStandardValues(null, value, null, sliderValue);
    })

    nonStandardWeight.addEventListener("input", (e) => {
        const sliderValue = snapSlider.noUiSlider.get();
        const max = Number(nonStandardWeight.getAttribute("max"))
        const value = Number(e.target.value);
        if (value > max) {
            nonStandardWeight.value = max
        }
        updateNoNonStandardValues(null, null, value, sliderValue);
    })
});


const selectOptions = (qty) => {

    if (isNaN(qty)) return;
    select.innerHTML = ""
    snapSlider.noUiSlider.updateOptions(
        {
            range: {
                'min': 0,
                'max': Number(qty) + 1
            }
        }
    );

    for (let i = 0; i <= qty; i++) {
        let option = document.createElement("option");
        option.text = i;
        option.value = i;

        select.appendChild(option);
    }
}
