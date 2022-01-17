export const columns = [
    {
        name: "logo",
        label: "Logo",
        options: {
            filter: false,
            searchable: false,
            customBodyRender: (value) => {
                return (
                    <img style={{ height: 50, width: 50 }} src={value} alt="logo" />
                )
            }
        }
    },
    {
        name: "name",
        label: "Name",
        options: {
            filter: false,
        }
    },
    {
        name: "city",
        label: "City",
        options: {
            filter: false,
            searchable: false
        }
    },
    {
        name: "speciality",
        label: "Speciality",
        options: {
            filter: true,
            searchable: false
        }
    }
];
export const options = {
    filterType: "checkbox",
    selectableRows: "none",
    download: false,
    print: false
};

export const backendURL = "http://localhost:5000";
