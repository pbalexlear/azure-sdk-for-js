/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/metricAlertsMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a MetricAlerts. */
export class MetricAlerts {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a MetricAlerts.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieve alert rule definitions in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricAlertsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.MetricAlertsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.MetricAlertResourceCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricAlertResourceCollection>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricAlertResourceCollection>, callback?: msRest.ServiceCallback<Models.MetricAlertResourceCollection>): Promise<Models.MetricAlertsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.MetricAlertsListBySubscriptionResponse>;
  }

  /**
   * Retrieve alert rule definitions in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricAlertsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.MetricAlertsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.MetricAlertResourceCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricAlertResourceCollection>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricAlertResourceCollection>, callback?: msRest.ServiceCallback<Models.MetricAlertResourceCollection>): Promise<Models.MetricAlertsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.MetricAlertsListByResourceGroupResponse>;
  }

  /**
   * Retrieve an alert rule definition.
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricAlertsGetResponse>
   */
  get(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<Models.MetricAlertsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, ruleName: string, callback: msRest.ServiceCallback<Models.MetricAlertResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricAlertResource>): void;
  get(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricAlertResource>, callback?: msRest.ServiceCallback<Models.MetricAlertResource>): Promise<Models.MetricAlertsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MetricAlertsGetResponse>;
  }

  /**
   * Create or update an metric alert definition.
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricAlertsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, ruleName: string, parameters: Models.MetricAlertResource, options?: msRest.RequestOptionsBase): Promise<Models.MetricAlertsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, ruleName: string, parameters: Models.MetricAlertResource, callback: msRest.ServiceCallback<Models.MetricAlertResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, ruleName: string, parameters: Models.MetricAlertResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricAlertResource>): void;
  createOrUpdate(resourceGroupName: string, ruleName: string, parameters: Models.MetricAlertResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricAlertResource>, callback?: msRest.ServiceCallback<Models.MetricAlertResource>): Promise<Models.MetricAlertsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.MetricAlertsCreateOrUpdateResponse>;
  }

  /**
   * Update an metric alert definition.
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to update.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricAlertsUpdateResponse>
   */
  update(resourceGroupName: string, ruleName: string, parameters: Models.MetricAlertResourcePatch, options?: msRest.RequestOptionsBase): Promise<Models.MetricAlertsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to update.
   * @param callback The callback
   */
  update(resourceGroupName: string, ruleName: string, parameters: Models.MetricAlertResourcePatch, callback: msRest.ServiceCallback<Models.MetricAlertResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, ruleName: string, parameters: Models.MetricAlertResourcePatch, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricAlertResource>): void;
  update(resourceGroupName: string, ruleName: string, parameters: Models.MetricAlertResourcePatch, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricAlertResource>, callback?: msRest.ServiceCallback<Models.MetricAlertResource>): Promise<Models.MetricAlertsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.MetricAlertsUpdateResponse>;
  }

  /**
   * Delete an alert rule definition.
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, ruleName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Insights/metricAlerts",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.MetricAlertResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.MetricAlertResourcePatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
