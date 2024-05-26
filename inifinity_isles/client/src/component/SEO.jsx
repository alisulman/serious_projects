/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet";

const SEO_Comp = ({ title = "Infinity Isles", description = "A online Shoping Store", keywords = "online Store, MERN, React, Bussiness ", author = "Ali Sulman" }) => {
    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title} - Infinity Isles</title>
            </Helmet>
        </>
    )
}
export default SEO_Comp
