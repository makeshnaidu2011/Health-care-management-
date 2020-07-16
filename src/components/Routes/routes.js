import React from "react"
import { Route } from "react-router-dom"




function Paths() {




    return (
        <>

            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/Products" component={Products} />
            <Route path="/Services" component={Services} />

        </>

    )
}





function Home() {
    return "hi"
}
function About() {
    return <>

        <h1>Patient Registration </h1>
    </>

} function ContactUs() {
    return <>
        <h1>Billing Deatils </h1>
    </>
} function Products() {
    return <>
        <h1>Sample </h1>
        <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse sed nisi placerat, sollicitudin velit at, eleifend tellus.
            Vivamus vestibulum urna ac odio venenatis ullamcorper.
            Maecenas a magna eleifend, vulputate enim id, pulvinar purus.
            Aenean faucibus purus in feugiat luctus.

            Maecenas et orci in ligula interdum vehicula vel vel tortor.
            Curabitur commodo magna ut risus porta ultricies.
            Quisque molestie mauris eget lorem bibendum pulvinar cursus et justo.

            Duis lobortis est eu suscipit iaculis.
            Sed vel odio nec mi mattis commodo ac convallis erat.

            Donec id tellus in nunc viverra posuere.
            Curabitur sed nibh vitae nisl scelerisque elementum at et augue.

            Cras maximus lorem non enim sagittis pretium.
            Curabitur vitae eros ac nunc pellentesque aliquam in sed mi.

            Morbi facilisis ligula sed lacinia sollicitudin.
            Morbi congue tellus ut tempus gravida.
            Proin condimentum purus id bibendum semper.
            Suspendisse id nibh ullamcorper, auctor libero sed, placerat arcu.

            Vestibulum vehicula eros vitae turpis fermentum, id pulvinar urna egestas.
            Fusce egestas metus vitae risus placerat posuere.
            In auctor ipsum et ipsum blandit viverra.

            Ut eu mi varius tortor dapibus semper vitae ac orci.
            Aliquam congue est a urna fermentum feugiat.

            Cras auctor nibh a elit viverra lacinia.
            Nunc sagittis lectus et ullamcorper vestibulum.

            Ut faucibus mauris ut leo semper, quis hendrerit massa posuere.
            Sed eget odio a dui volutpat eleifend.
            Proin at orci consequat, dignissim velit eu, accumsan libero.
</p></>
} function Services() {
    return <>
        <h1>This is Services page </h1></>
}
function AdminPanel() {
    return <>
        <h1>This is Admin Panel </h1></>
} function UserConfig() {
    return <>
        <h1>This is UserConfig </h1></>
}


export default Paths;
export { About, ContactUs, Products, Services, AdminPanel, UserConfig }