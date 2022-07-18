import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div className=''>
            <Row xs={1} className="g-3" md={2} lg={3}>
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;