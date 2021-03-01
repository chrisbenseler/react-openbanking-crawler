function ServicesFees({ services }) {
  return (
    <div>
      {services.map((service) => (
        <div>
          {service.name} ({service.code})
          <ul>
            {service.prices.map((price) => (
              <li>
                {price.interval}: {price.value} {price.currency}
              </li>
            ))}
          </ul>
          Min/max: { service.minimum.value } / { service.maximum.value } { service.minimum.currency }
        </div>
      ))}
    </div>
  );
}

export default ServicesFees;
