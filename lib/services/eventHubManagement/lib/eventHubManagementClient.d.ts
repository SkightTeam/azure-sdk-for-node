/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientCredentials } from 'ms-rest';
import { AzureServiceClient, AzureServiceClientOptions } from 'ms-rest-azure';
import * as operations from "./operations";

declare class EventHubManagementClient extends AzureServiceClient {
  /**
   * Initializes a new instance of the EventHubManagementClient class.
   * @constructor
   *
   * @class
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: AzureServiceClientOptions);

  credentials: ServiceClientCredentials;

  subscriptionId: string;

  apiVersion: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;

  // Operation groups
  operations: operations.Operations;
  namespaces: operations.Namespaces;
  disasterRecoveryConfigs: operations.DisasterRecoveryConfigs;
  eventHubs: operations.EventHubs;
  consumerGroups: operations.ConsumerGroups;
}

export = EventHubManagementClient;
