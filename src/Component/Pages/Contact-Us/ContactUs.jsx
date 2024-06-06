import "./ContactUs.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Select, MenuItem, FormControl, InputLabel, FormHelperText, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com'; // Import EmailJS
import { timeZones } from "../../DevData/devData";

const ContactUs = () => {
    const contactInfo = [
        { label: 'Address:', content: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom' },
        { label: 'Phone:', content: '+44 20 8089 9460' },
        { label: 'Email:', content: 'admin@fathena.com' },
    ];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
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
                <div className="col-12 col-md-6">
                    <div className="">
                        <h3 style={{ color: "#444444" }} className="bluetitle text-start">
                            Contact Us
                        </h3>
                        <p style={{ color: "#444444" }} className="section-text2">
                            Whether you have inquiries, feedback, or need specific information, our team is here to help.
                        </p>
                        <ul className="p-0 mt-5">
                            <li><h6 className="fw-bold">Athena Technology Limited (UK)</h6></li>
                            {contactInfo.map((item) => (
                                <li className="py-0" key={item.label}>
                                    <p style={{ color: "#444444" }}>
                                        {item.label} {/* Display the label */}
                                        {item.label === 'Email:' && ( // Check for email
                                            <a href={`mailto:${item.content}`}>{item.content}</a>
                                        )}
                                        {item.label === 'Phone:' && ( // Check for phone number
                                            <a href={`tel:${item.content}`}>{item.content}</a>
                                        )}
                                        {item.label !== 'Email:' && item.label !== 'Phone:' && ( // Display other content
                                            item.content
                                        )}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <img className="w-100 h-auto" src="Assets/Images/Conact-Us-Page-image-1.png" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <form className="form-section" onSubmit={handleSubmit}>
                        <div className="row">
                            <label className="fw-medium fs-5 pb-2" htmlFor="">Name</label>
                            <div className="col-12 col-lg-6 col-md-6 mb-4">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label=""
                                    error={!!errors.firstName}
                                    helperText={errors.firstName}
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <label className="pt-1" htmlFor="">First</label>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 mb-4">
                                <TextField
                                    fullWidth
                                    size="small"
                                    label=""
                                    error={!!errors.lastName}
                                    helperText={errors.lastName}
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                <label className="pt-1" htmlFor="">Last</label>
                            </div>
                            <div className="col-12 mb-4">
                                <label className="fw-medium fs-5 pb-2" htmlFor="">Zones</label>
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
                            <div className="col-12 mb-4">
                                <label className="fw-medium fs-5 pb-2" htmlFor="">Time</label>
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
                                <label className="fw-medium fs-5 pb-2" htmlFor="">Comment or Message</label>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
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
                            className="fathena-btn rounded-1 py-2 h-25 fs-6 px-3"
                        >
                            SUBMIT
                        </Button>
                    </form>
                    <p className="section-text2 pt-4">
                        Your privacy is important to us, and we will handle your information in accordance with our
                        <Link className="ps-2" to="/privacy-policy">Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
