function ServicesFees({ services }) {
  return (
    <div>
      {services.map((service, i) => (
        <div key={`service_${i}`}>
          {service.name} ({service.code})
          <ul>
            {service.prices.map((price, index) => (
              <li key={`price_${index}`}>
                {price.interval}: {price.value} {price.currency}
              </li>
            ))}
          </ul>
          Min/max: {service.minimum.value} / {service.maximum.value}{" "}
          {service.minimum.currency}
        </div>
      ))}
    </div>
  );
}

export default ServicesFees;
