import countries from "world-countries";

const formattedContries = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common
}));

const useCountries = () => {
    const getAll = () => formattedContries

    const getByValue = (value: string) => {
        return formattedContries.find((item) => item.value === value)
    }

    return {
        getAll,
        getByValue
    }
}

export default useCountries;