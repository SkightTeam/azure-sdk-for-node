/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the IpAddressGroup class.
 * @constructor
 * CDN Ip address group
 *
 * @member {string} [deliveryRegion] The delivery region of the ip address
 * group
 *
 * @member {array} [ipv4Addresses] The list of ip v4 addresses.
 *
 * @member {array} [ipv6Addresses] The list of ip v6 addresses.
 *
 */
function IpAddressGroup() {
}

/**
 * Defines the metadata of IpAddressGroup
 *
 * @returns {object} metadata of IpAddressGroup
 *
 */
IpAddressGroup.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'IpAddressGroup',
    type: {
      name: 'Composite',
      className: 'IpAddressGroup',
      modelProperties: {
        deliveryRegion: {
          required: false,
          serializedName: 'deliveryRegion',
          type: {
            name: 'String'
          }
        },
        ipv4Addresses: {
          required: false,
          serializedName: 'ipv4Addresses',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CidrIpAddressElementType',
                type: {
                  name: 'Composite',
                  className: 'CidrIpAddress'
                }
            }
          }
        },
        ipv6Addresses: {
          required: false,
          serializedName: 'ipv6Addresses',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CidrIpAddressElementType',
                type: {
                  name: 'Composite',
                  className: 'CidrIpAddress'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = IpAddressGroup;