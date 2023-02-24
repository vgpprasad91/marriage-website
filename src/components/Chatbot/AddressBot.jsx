import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


export class AddressBot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            result: '',
            trigger: false,
        };
    }

    render() {
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px' }}>
          <a href="https://www.tripadvisor.com/HotelsNear-g304556-d1148414-Palmgrove_Hotel-Chennai_Madras_Chennai_District_Tamil_Nadu.html" target="_blank" rel="noreferrer">
            <button style={{ backgroundColor: '#7851a9', color: 'white', border: '1px solid black', padding: '10px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>Nearby Hotels</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
          </a>
          <a href="https://www.tripadvisor.com/Attraction_Products-g304556-zfg11873-Chennai_Madras_Chennai_District_Tamil_Nadu.html" target="_blank" rel="noreferrer">
            <button style={{ backgroundColor: '#7851a9', color: 'white', border: '1px solid black', padding: '10px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>Nearby Travels</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
          </a>
          <a href="https://www.justdial.com/Chennai/Temples-in-Nungambakkam/nct-10475644" target="_blank" rel="noreferrer">
            <button style={{ backgroundColor: '#7851a9', color: 'white', border: '1px solid black', padding: '10px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>Nearby Temples</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
          </a>
          <button 
            style={{ backgroundColor: '#7851a9', color: 'white', border: '1px solid black', padding: '10px' }} 
            onClick={() => {
              this.props.triggerNextStep({trigger: '2'})
            }}
          >
            Main Menu
          </button>
        </div>
        );
    }
}