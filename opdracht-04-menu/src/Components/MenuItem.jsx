const MenuItem = ({img, title, price, desc}) => {
    return (
        <section>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>{desc}</p>
        </section>
      );
}
 
export default MenuItem;