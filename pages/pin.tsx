import Head from "next/head";
import Style from '../styles/pin.module.scss';

const Pin = () => {
    return (
        <>
            <Head>
                <script
                    type="text/javascript"
                    async
                    src="//cdn.credly.com/assets/utilities/embed.js"
                ></script>
            </Head>
            <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="bab26fad-dc3d-4c48-96d7-f2fffce31f68"
                data-share-badge-host="https://www.credly.com"
            ></div>
            <div>
                <a href="https://www.credly.com/badges/bab26fad-dc3d-4c48-96d7-f2fffce31f68/public_url">
                    <img className={Style.badge} src="/assets/pin/practitioner.png" />
                </a>
            </div>
        </>
    );
};

export default Pin;