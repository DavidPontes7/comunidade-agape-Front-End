// src/components/Player.js
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

declare global {
  interface Window {
    MRP: any;
    $: any;
  }
}

const Player = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://hosted.muses.org/mrp.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.MRP.insert({
                'url': 'https://08.stmip.net:8668/;',
                'lang': 'pt',
                'codec': "mp3",
                'volume': 100,
                'autoplay': true,
                'forceHTML5': true,
                'jsevents': true,
                'buffering': 0,
                'title': "",
                'wmode': 'transparent',
                'skin': 'substream',
                'width': 180,
                'height': 30
            });
        };

        const shoutcastScript = document.createElement('script');
        shoutcastScript.src = "https://p.stmip.net/player/shoutcastInfo.js";
        shoutcastScript.async = true;
        document.body.appendChild(shoutcastScript);

        shoutcastScript.onload = () => {
            window.$.SHOUTcast({
                host: '08.stmip.net',
                port: 8668,
                interval: 12000,
                stats: function () {
                    // document.getElementById('songtitle').textContent = this.get('songtitle');
                    // document.getElementById('servertitle').textContent = this.get('servertitle');
                }
            }).startStats();
        };

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(shoutcastScript);
        };
    }, []);

    return (
        <div className="container mx-auto py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                <div className="text-white flex justify-center lg:justify-start">
                    {/* Placeholder for MRP player */}
                    <div id="mrp_player"></div>
                </div>
                <div className="text-white text-center">
                    <div id="servertitle" className="text-xl font-bold">...</div>
                    <div id="songtitle" className="text-lg">...</div>
                </div>
                <div className="text-white flex justify-center lg:justify-end space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Player;
