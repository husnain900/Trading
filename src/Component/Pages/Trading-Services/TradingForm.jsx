import { useState } from "react";
import Button from "@mui/material/Button";
import { Select, MenuItem, FormControl, InputLabel, FormHelperText, TextField } from "@mui/material";
import emailjs from 'emailjs-com'; // Import EmailJS
import { timeZones } from "../../DevData/devData";

const TradingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        time: '',
        inquiries: '',
        timeZone: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.time) newErrors.time = "Preferred contact time is required";
        if (!formData.inquiries) newErrors.inquiries = "Inquiry details are required";
        if (!formData.timeZone) newErrors.timeZone = "Time zone is required";
        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // EmailJS send email logic here
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (error) => {
                    console.log('FAILED...', error);
                });

            console.log("Form submitted successfully");
        } else {
            setErrors(validationErrors);
        }
    };

    const contactTimes = [
        "6AM – 9PM",
        "9PM – 12PM",
        "12PM – 3PM",
        "3PM – 6PM",
        "6PM – 9PM",
        "9PM – 12PM"
    ];

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-12 col-lg-8">
                    <h1 className="titleline text-start">
                        Let’s talk about
                        your requirements
                    </h1>
                    <form className="form-section" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-6 mb-4">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Name"
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 mb-4">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Phone Number"
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 mb-4">
                                <FormControl fullWidth size="small" error={!!errors.timeZone}>
                                    <InputLabel id="time-zone-label">Time Zone</InputLabel>
                                    <Select
                                        labelId="time-zone-label"
                                        name="timeZone"
                                        value={formData.timeZone}
                                        onChange={handleChange}
                                        label="Time Zone"
                                    >
                                        {timeZones.map((zone, index) => (
                                            <MenuItem key={index} value={zone.value}>
                                                {zone.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {errors.timeZone && <FormHelperText>{errors.timeZone}</FormHelperText>}
                                </FormControl>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 mb-4">
                                <FormControl fullWidth size="small" error={!!errors.time}>
                                    <InputLabel id="contact-time-label">Preferred Contact Time</InputLabel>
                                    <Select
                                        labelId="contact-time-label"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        label="Preferred Contact Time"
                                    >
                                        {contactTimes.map((time, index) => (
                                            <MenuItem key={index} value={time}>
                                                {time}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {errors.time && <FormHelperText>{errors.time}</FormHelperText>}
                                </FormControl>
                            </div>
                            <div className="col-12 mb-4">
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={8}
                                    label="Inquiries"
                                    error={!!errors.inquiries}
                                    helperText={errors.inquiries && <span style={{ color: 'red' }}>{errors.inquiries}</span>}
                                    name="inquiries"
                                    value={formData.inquiries}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            className="fathena-btn"
                        >
                            SUBMIT
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TradingForm;
