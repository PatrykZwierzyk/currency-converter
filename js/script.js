{
    const welcome = () => {
        console.log("Witajcie");
    };
    welcome();

    const calculateResult = (amount, currency) => {

        const EUR = 4.78;
        const USD = 4.47;
        const GBP = 5.37;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "GBP":
                return amount / GBP;
        }
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = (`${result.toFixed(2)} ${currency}`);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}