/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ResumeClusterUpgrade class.
 * @constructor
 * The upgrade of the resume cluster
 * @member {string} [upgradeDomain]
 * 
 */
function ResumeClusterUpgrade() {
}

/**
 * Defines the metadata of ResumeClusterUpgrade
 *
 * @returns {object} metadata of ResumeClusterUpgrade
 *
 */
ResumeClusterUpgrade.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResumeClusterUpgrade',
    type: {
      name: 'Composite',
      className: 'ResumeClusterUpgrade',
      modelProperties: {
        upgradeDomain: {
          required: false,
          serializedName: 'UpgradeDomain',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ResumeClusterUpgrade;