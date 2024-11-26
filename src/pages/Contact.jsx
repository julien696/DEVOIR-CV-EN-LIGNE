import { useState } from "react";

const Contact = () => {

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
   });

   const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
   });

   const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
        formErrors.name = 'Le nom est requis.';
        isValid = false;    
    }

    if (!formData.email) {
        formErrors.email = `L'email est requis`;
        isValid = false;    
    }

    if (!formData.phone) {
        formErrors.phone = 'le téléphone est requis.';
        isValid = false;    
    }

    if (!formData.subject) {
        formErrors.subject = 'le sujet est requis.';
        isValid = false;    
    }

    if (!formData.message) {
        formErrors.message = 'le message est requis.';
        isValid = false;    
    }

    setErrors(formErrors);
    return isValid;
   };

   const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
   };

   const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()){
        alert('votre formulaire est envoyer')
    };

    setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
   };
    
    return(
        <>
            <main>
                <div className="container-contact">
                    <div className="layout-contact pt-2 px-3 pb-5">
                        <div className="border border-1 rounded-3 mt-3 mx-4 mb-5 bg-white">
                            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                                <h1 className="fs-1 px-5 text-center">ME CONTACTER</h1>
                                <span className="fs-4 text-center gradient">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</span>
                            </div>
                            <div className="container-fluid mx-auto p-5">
                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="col">
                                        <h2 className="fs-2 pb-2 my-3 border-bottom border-primary border-3">Formulaire de contact</h2>
                                        <form onSubmit={handleSubmit} className="text-center my-5">
                                            <div>
                                                <input className="form-control mb-3" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom"/>
                                                {errors.name && <p className="text-danger">{errors.name}</p>}
                                            </div>
                                            <div>
                                                <input className="form-control mb-3" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre adresse e-mail"/>
                                                {errors.email && <p className="text-danger">{errors.email}</p>}
                                            </div>
                                            <div>
                                                <input className="form-control mb-3" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Votre numéro de téléphone"/>
                                                {errors.phone && <p className="text-danger">{errors.phone}</p>}
                                            </div>
                                            <div>
                                                <input className="form-control mb-3" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Sujet"/>
                                                {errors.subject && <p className="text-danger">{errors.subject}</p>}
                                            </div>
                                            <div>
                                                <textarea className="form-control mb-3" rows="6" name="message" value={formData.message} onChange={handleChange} placeholder="Votre message"></textarea>
                                                {errors.message && <p className="text-danger">{errors.message}</p>}
                                            </div>
                                            <button type="submit" className="btn btn-primary">Envoyer</button>
                                        </form>
                                    </div>
                                    <div className="col">
                                        <h3 className="fs-2 pb-2 my-3 border-bottom border-primary border-3">Mes coordonées</h3>
                                        <div>
                                            <img src="../public/icon/location-dot-solid.svg" alt="Icon de localisation" className="icon"/>
                                            <span> 40 Rue Laure Diebold, 69009 Lyon, France</span>
                                        </div>
                                        <div className="mb-3">
                                            <img src="../public/icon/mobile-screen-button-solid.svg" alt="Icon de téléphone portable" className="icon"/>
                                            <span> 06 20 30 40 50</span>
                                        </div>
                                        <img src="../public/img/Capture-Lyon.jpg" alt="Plan google maps de l'adresse 40 rue Laure Diebold Lyon" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>  
    )
}

export default Contact;