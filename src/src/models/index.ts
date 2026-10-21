/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AddAppServiceVolumeInput
 */
export interface AddAppServiceVolumeInput {
    /**
     * 
     * @type {string}
     * @memberof AddAppServiceVolumeInput
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof AddAppServiceVolumeInput
     */
    size?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AddAppServiceVolumeInput
     */
    storageClassName?: string | null;
}
/**
 * 
 * @export
 * @interface AgentChat
 */
export interface AgentChat {
    /**
     * 
     * @type {number}
     * @memberof AgentChat
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AgentChat
     */
    orgId: number;
    /**
     * 
     * @type {string}
     * @memberof AgentChat
     */
    title: string;
    /**
     * idle takes a message; running is the agent working; waiting is a call that waits for approval or an answer.
     * @type {string}
     * @memberof AgentChat
     */
    status: AgentChatStatusEnum;
    /**
     * Why the last run stopped without an answer, or empty.
     * @type {string}
     * @memberof AgentChat
     */
    error: string;
    /**
     * 
     * @type {AgentChatApprovalMode}
     * @memberof AgentChat
     */
    approvalMode: AgentChatApprovalMode;
    /**
     * Tokens in the chat's context after the newest reply.
     * @type {number}
     * @memberof AgentChat
     */
    contextTokens: number;
    /**
     * Context size at which the agent summarizes the chat to continue it.
     * @type {number}
     * @memberof AgentChat
     */
    contextLimit: number;
    /**
     * 
     * @type {string}
     * @memberof AgentChat
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AgentChat
     */
    updatedAt: string;
}


/**
 * @export
 */
export const AgentChatStatusEnum = {
    Idle: 'idle',
    Running: 'running',
    Waiting: 'waiting'
} as const;
export type AgentChatStatusEnum = typeof AgentChatStatusEnum[keyof typeof AgentChatStatusEnum];

/**
 * 
 * @export
 * @interface AgentChatAnswerRequest
 */
export interface AgentChatAnswerRequest {
    /**
     * The ask_user message that waits for an answer.
     * @type {number}
     * @memberof AgentChatAnswerRequest
     */
    messageId: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof AgentChatAnswerRequest
     */
    answers: Array<string>;
}

/**
 * Whether the chat's tool calls that change something wait for approval. ask, the default, waits for every change. never_ask runs every change at once, including destructive ones and container commands. A question the agent asks always waits for an answer.
 * @export
 */
export const AgentChatApprovalMode = {
    Ask: 'ask',
    NeverAsk: 'never_ask'
} as const;
export type AgentChatApprovalMode = typeof AgentChatApprovalMode[keyof typeof AgentChatApprovalMode];

/**
 * 
 * @export
 * @interface AgentChatApprovalModeRequest
 */
export interface AgentChatApprovalModeRequest {
    /**
     * 
     * @type {AgentChatApprovalMode}
     * @memberof AgentChatApprovalModeRequest
     */
    approvalMode: AgentChatApprovalMode;
}


/**
 * 
 * @export
 * @interface AgentChatApprovalRequest
 */
export interface AgentChatApprovalRequest {
    /**
     * The tool message that waits for approval.
     * @type {number}
     * @memberof AgentChatApprovalRequest
     */
    messageId: number;
    /**
     * 
     * @type {boolean}
     * @memberof AgentChatApprovalRequest
     */
    approve: boolean;
}
/**
 * 
 * @export
 * @interface AgentChatDetail
 */
export interface AgentChatDetail {
    /**
     * 
     * @type {AgentChat}
     * @memberof AgentChatDetail
     */
    chat: AgentChat;
    /**
     * 
     * @type {Array<AgentChatMessage>}
     * @memberof AgentChatDetail
     */
    messages: Array<AgentChatMessage>;
}
/**
 * 
 * @export
 * @interface AgentChatMessage
 */
export interface AgentChatMessage {
    /**
     * 
     * @type {number}
     * @memberof AgentChatMessage
     */
    id: number;
    /**
     * A tool message is a call's result, or a call that waits; a summary replaced earlier messages for the model.
     * @type {string}
     * @memberof AgentChatMessage
     */
    role: AgentChatMessageRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof AgentChatMessage
     */
    content: string;
    /**
     * For a tool message, the Wodby tool the call is for. ask_user is a question from the agent.
     * @type {string}
     * @memberof AgentChatMessage
     */
    tool?: string;
    /**
     * For a tool message, the call's arguments. For ask_user, the question, its options (label, description, recommended) and whether several may be chosen. The recommended options come first and their labels end with (Recommended).
     * @type {{ [key: string]: any; }}
     * @memberof AgentChatMessage
     */
    toolArguments?: { [key: string]: any; };
    /**
     * Set on a call that changes something or asks a question.
     * @type {string}
     * @memberof AgentChatMessage
     */
    approval: AgentChatMessageApprovalEnum | null;
    /**
     * True for a call that deletes, overwrites, upgrades or interrupts something, or runs a command in a container.
     * @type {boolean}
     * @memberof AgentChatMessage
     */
    toolDestructive: boolean;
    /**
     * For a call that waits for approval, what its ID arguments refer to, as far as the user may see them, each with the argument it names.
     * @type {Array<AgentChatToolTarget>}
     * @memberof AgentChatMessage
     */
    toolTargets: Array<AgentChatToolTarget>;
    /**
     * 
     * @type {boolean}
     * @memberof AgentChatMessage
     */
    isError: boolean;
    /**
     * 
     * @type {string}
     * @memberof AgentChatMessage
     */
    createdAt: string;
}


/**
 * @export
 */
export const AgentChatMessageRoleEnum = {
    User: 'user',
    Assistant: 'assistant',
    Tool: 'tool',
    Summary: 'summary'
} as const;
export type AgentChatMessageRoleEnum = typeof AgentChatMessageRoleEnum[keyof typeof AgentChatMessageRoleEnum];

/**
 * @export
 */
export const AgentChatMessageApprovalEnum = {
    Pending: 'pending',
    Approved: 'approved',
    Rejected: 'rejected'
} as const;
export type AgentChatMessageApprovalEnum = typeof AgentChatMessageApprovalEnum[keyof typeof AgentChatMessageApprovalEnum];

/**
 * 
 * @export
 * @interface AgentChatMessageRequest
 */
export interface AgentChatMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof AgentChatMessageRequest
     */
    message: string;
}
/**
 * 
 * @export
 * @interface AgentChatToolTarget
 */
export interface AgentChatToolTarget {
    /**
     * What the argument refers to, such as Environment, Project or CI integration.
     * @type {string}
     * @memberof AgentChatToolTarget
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof AgentChatToolTarget
     */
    name: string;
    /**
     * The call's argument this names, such as project_id.
     * @type {string}
     * @memberof AgentChatToolTarget
     */
    argument: string;
}
/**
 * 
 * @export
 * @interface App
 */
export interface App {
    /**
     * 
     * @type {number}
     * @memberof App
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    status: string;
    /**
     * 
     * @type {boolean}
     * @memberof App
     */
    clusterApp: boolean;
    /**
     * 
     * @type {number}
     * @memberof App
     */
    orgId: number;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    ownershipScope: AppOwnershipScopeEnum;
    /**
     * 
     * @type {number}
     * @memberof App
     */
    ownerProjectId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    updatedAt: string;
}


/**
 * @export
 */
export const AppOwnershipScopeEnum = {
    Org: 'org',
    Project: 'project'
} as const;
export type AppOwnershipScopeEnum = typeof AppOwnershipScopeEnum[keyof typeof AppOwnershipScopeEnum];

/**
 * 
 * @export
 * @interface AppAccess
 */
export interface AppAccess {
    /**
     * 
     * @type {number}
     * @memberof AppAccess
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppAccess
     */
    mode: AppAccessModeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppAccess
     */
    scope: AppAccessScopeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppAccess
     */
    status: string;
    /**
     * 
     * @type {Array<AppAccessSetting>}
     * @memberof AppAccess
     */
    settings: Array<AppAccessSetting>;
    /**
     * 
     * @type {boolean}
     * @memberof AppAccess
     */
    publicRoutesSuppressed: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppAccess
     */
    effectiveUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppAccess
     */
    lastError?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppAccess
     */
    integrationId: number;
    /**
     * 
     * @type {Array<AppAccessEndpoint>}
     * @memberof AppAccess
     */
    endpoints: Array<AppAccessEndpoint>;
    /**
     * 
     * @type {Array<AppAccessResource>}
     * @memberof AppAccess
     */
    resources: Array<AppAccessResource>;
    /**
     * 
     * @type {string}
     * @memberof AppAccess
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccess
     */
    updatedAt: string;
}


/**
 * @export
 */
export const AppAccessModeEnum = {
    Protected: 'protected',
    PrivateNetwork: 'private_network'
} as const;
export type AppAccessModeEnum = typeof AppAccessModeEnum[keyof typeof AppAccessModeEnum];

/**
 * @export
 */
export const AppAccessScopeEnum = {
    EntireApp: 'entire_app',
    SelectedEndpoints: 'selected_endpoints'
} as const;
export type AppAccessScopeEnum = typeof AppAccessScopeEnum[keyof typeof AppAccessScopeEnum];

/**
 * 
 * @export
 * @interface AppAccessCleanup
 */
export interface AppAccessCleanup {
    /**
     * 
     * @type {number}
     * @memberof AppAccessCleanup
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppAccessCleanup
     */
    appAccessId: number;
    /**
     * 
     * @type {number}
     * @memberof AppAccessCleanup
     */
    appInstanceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppAccessCleanup
     */
    integrationId: number;
    /**
     * 
     * @type {string}
     * @memberof AppAccessCleanup
     */
    provider: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessCleanup
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof AppAccessCleanup
     */
    attempts: number;
    /**
     * 
     * @type {string}
     * @memberof AppAccessCleanup
     */
    lastError?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppAccessCleanup
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessCleanup
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface AppAccessEndpoint
 */
export interface AppAccessEndpoint {
    /**
     * 
     * @type {number}
     * @memberof AppAccessEndpoint
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppAccessEndpoint
     */
    appPortId: number;
    /**
     * 
     * @type {string}
     * @memberof AppAccessEndpoint
     */
    host: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppAccessEndpoint
     */
    primary: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppAccessEndpoint
     */
    url: string;
}
/**
 * 
 * @export
 * @interface AppAccessEndpointInput
 */
export interface AppAccessEndpointInput {
    /**
     * 
     * @type {number}
     * @memberof AppAccessEndpointInput
     */
    appPortId: number;
    /**
     * 
     * @type {string}
     * @memberof AppAccessEndpointInput
     */
    host?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppAccessEndpointInput
     */
    primary: boolean;
}
/**
 * 
 * @export
 * @interface AppAccessOperationResult
 */
export interface AppAccessOperationResult {
    /**
     * 
     * @type {AppAccess}
     * @memberof AppAccessOperationResult
     */
    access: AppAccess;
    /**
     * 
     * @type {number}
     * @memberof AppAccessOperationResult
     */
    taskId?: number | null;
}
/**
 * 
 * @export
 * @interface AppAccessProviderConfiguration
 */
export interface AppAccessProviderConfiguration {
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderConfiguration
     */
    mode: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderConfiguration
     */
    endpointHostMode: string;
    /**
     * 
     * @type {Array<AppAccessProviderField>}
     * @memberof AppAccessProviderConfiguration
     */
    fields: Array<AppAccessProviderField>;
}
/**
 * 
 * @export
 * @interface AppAccessProviderField
 */
export interface AppAccessProviderField {
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderField
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderField
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderField
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppAccessProviderField
     */
    required: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppAccessProviderField
     */
    radio: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppAccessProviderField
     */
    hostnameSuffix: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppAccessProviderField
     */
    affectsHostname: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderField
     */
    defaultValue?: string | null;
    /**
     * 
     * @type {Array<AppAccessProviderOption>}
     * @memberof AppAccessProviderField
     */
    options: Array<AppAccessProviderOption>;
}
/**
 * 
 * @export
 * @interface AppAccessProviderOption
 */
export interface AppAccessProviderOption {
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderOption
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderOption
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppAccessProviderOption
     */
    flattenHostnamePrefix: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderOption
     */
    warningTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderOption
     */
    warning?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderOption
     */
    warningUrl?: string | null;
}
/**
 * 
 * @export
 * @interface AppAccessProviderOptions
 */
export interface AppAccessProviderOptions {
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderOptions
     */
    provider: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppAccessProviderOptions
     */
    modes: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppAccessProviderOptions
     */
    scopes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof AppAccessProviderOptions
     */
    endpointHostMode: string;
    /**
     * 
     * @type {Array<AppAccessProviderField>}
     * @memberof AppAccessProviderOptions
     */
    fields: Array<AppAccessProviderField>;
    /**
     * 
     * @type {Array<AppAccessProviderConfiguration>}
     * @memberof AppAccessProviderOptions
     */
    configurations: Array<AppAccessProviderConfiguration>;
}
/**
 * 
 * @export
 * @interface AppAccessResource
 */
export interface AppAccessResource {
    /**
     * 
     * @type {number}
     * @memberof AppAccessResource
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppAccessResource
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessResource
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessResource
     */
    externalId: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessResource
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessResource
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessResource
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface AppAccessSetting
 */
export interface AppAccessSetting {
    /**
     * 
     * @type {string}
     * @memberof AppAccessSetting
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessSetting
     */
    value: string;
}
/**
 * 
 * @export
 * @interface AppAccessSettingInput
 */
export interface AppAccessSettingInput {
    /**
     * 
     * @type {string}
     * @memberof AppAccessSettingInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppAccessSettingInput
     */
    value: string;
}
/**
 * 
 * @export
 * @interface AppAnnotation
 */
export interface AppAnnotation {
    /**
     * 
     * @type {number}
     * @memberof AppAnnotation
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppAnnotation
     */
    appEnvironmentId: number;
    /**
     * 
     * @type {number}
     * @memberof AppAnnotation
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppAnnotation
     */
    appRouteId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppAnnotation
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppAnnotation
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof AppAnnotation
     */
    type: AppAnnotationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppAnnotation
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppAnnotation
     */
    updatedAt: string;
}


/**
 * @export
 */
export const AppAnnotationTypeEnum = {
    Ingress: 'ingress'
} as const;
export type AppAnnotationTypeEnum = typeof AppAnnotationTypeEnum[keyof typeof AppAnnotationTypeEnum];

/**
 * 
 * @export
 * @interface AppAuth
 */
export interface AppAuth {
    /**
     * 
     * @type {number}
     * @memberof AppAuth
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppAuth
     */
    appInstanceId: number;
    /**
     * 
     * @type {AppAuthScope}
     * @memberof AppAuth
     */
    scope: AppAuthScope;
    /**
     * App services protected by this entry. Empty unless scope is SERVICE.
     * @type {Array<number>}
     * @memberof AppAuth
     */
    appServiceIds: Array<number>;
    /**
     * Single protected app service. Null when the entry protects several services or the whole app environment.
     * @type {number}
     * @memberof AppAuth
     * @deprecated
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppAuth
     */
    appRouteId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppAuth
     */
    login: string;
    /**
     * 
     * @type {string}
     * @memberof AppAuth
     */
    realm: string;
    /**
     * 
     * @type {string}
     * @memberof AppAuth
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppAuth
     */
    updatedAt: string;
}



/**
 * What a basic auth entry protects. Route beats service, service beats app.
 * @export
 */
export const AppAuthScope = {
    App: 'APP',
    Service: 'SERVICE',
    Route: 'ROUTE'
} as const;
export type AppAuthScope = typeof AppAuthScope[keyof typeof AppAuthScope];

/**
 * 
 * @export
 * @interface AppBuild
 */
export interface AppBuild {
    /**
     * 
     * @type {number}
     * @memberof AppBuild
     */
    id: number;
    /**
     * App environment build-launch number. Build records created by the same Wodby CI launch share this number.
     * @type {number}
     * @memberof AppBuild
     */
    number: number;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof AppBuild
     */
    appInstanceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppBuild
     */
    appServiceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppBuild
     */
    taskId?: number | null;
    /**
     * 
     * @type {Task}
     * @memberof AppBuild
     */
    task?: Task | null;
    /**
     * 
     * @type {Array<AppServiceBuild>}
     * @memberof AppBuild
     */
    appServiceBuilds: Array<AppServiceBuild>;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    gitRefType: string;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    gitRef: string;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    commitHash: string;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    commitMessage: string;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    authorName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    authorEmail?: string | null;
    /**
     * CI workflow that produced an externally built image. Empty for Wodby CI builds.
     * @type {string}
     * @memberof AppBuild
     */
    workflow: string;
    /**
     * Stack revision the build was made for.
     * @type {number}
     * @memberof AppBuild
     */
    stackRevId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppBuild
     */
    gitRepoId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppBuild
     */
    ciIntegrationId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppBuild
     */
    registryIntegrationId?: number | null;
    /**
     * Whether the build's images were voided and can no longer be deployed.
     * @type {string}
     * @memberof AppBuild
     */
    imageVoidStatus: AppBuildImageVoidStatusEnum;
    /**
     * True when the build's images can be voided now.
     * @type {boolean}
     * @memberof AppBuild
     */
    canVoidImages: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    startedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppBuild
     */
    endedAt?: string | null;
}


/**
 * @export
 */
export const AppBuildImageVoidStatusEnum = {
    None: 'none',
    PartiallyVoided: 'partially_voided',
    Voided: 'voided'
} as const;
export type AppBuildImageVoidStatusEnum = typeof AppBuildImageVoidStatusEnum[keyof typeof AppBuildImageVoidStatusEnum];

/**
 * 
 * @export
 * @interface AppBuildConfig
 */
export interface AppBuildConfig {
    /**
     * 
     * @type {string}
     * @memberof AppBuildConfig
     */
    registryHost: string;
    /**
     * 
     * @type {string}
     * @memberof AppBuildConfig
     */
    registryRepository: string;
    /**
     * 
     * @type {Array<AppServiceBuildConfig>}
     * @memberof AppBuildConfig
     */
    services: Array<AppServiceBuildConfig>;
}
/**
 * 
 * @export
 * @interface AppBuildsCreateResponse
 */
export interface AppBuildsCreateResponse {
    /**
     * 
     * @type {Array<AppBuild>}
     * @memberof AppBuildsCreateResponse
     */
    items: Array<AppBuild>;
    /**
     * 
     * @type {number}
     * @memberof AppBuildsCreateResponse
     */
    taskId?: number | null;
}
/**
 * 
 * @export
 * @interface AppBuildsResponse
 */
export interface AppBuildsResponse {
    /**
     * 
     * @type {Array<AppBuild>}
     * @memberof AppBuildsResponse
     */
    items: Array<AppBuild>;
    /**
     * 
     * @type {number}
     * @memberof AppBuildsResponse
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof AppBuildsResponse
     */
    nextPage?: number | null;
}
/**
 * 
 * @export
 * @interface AppDeployment
 */
export interface AppDeployment {
    /**
     * 
     * @type {number}
     * @memberof AppDeployment
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppDeployment
     */
    number: number;
    /**
     * Overall result, including the routing updates that follow the service rollout.
     * @type {string}
     * @memberof AppDeployment
     */
    status: string;
    /**
     * Progress of rolling out the selected services. It does not show whether routing has finished.
     * @type {string}
     * @memberof AppDeployment
     */
    rolloutStatus: AppDeploymentRolloutStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AppDeployment
     */
    rolloutEndedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDeployment
     */
    rollbackStatus: AppDeploymentRollbackStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AppDeployment
     */
    postDeploymentStatus: AppDeploymentPostDeploymentStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AppDeployment
     */
    skipRollback: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppDeployment
     */
    canCancel: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppDeployment
     */
    appInstanceId: number;
    /**
     * 
     * @type {Array<AppBuild>}
     * @memberof AppDeployment
     */
    builds: Array<AppBuild>;
    /**
     * 
     * @type {number}
     * @memberof AppDeployment
     */
    preparationTaskId?: number | null;
    /**
     * 
     * @type {Task}
     * @memberof AppDeployment
     */
    preparationTask?: Task | null;
    /**
     * 
     * @type {number}
     * @memberof AppDeployment
     */
    taskId?: number | null;
    /**
     * 
     * @type {Task}
     * @memberof AppDeployment
     */
    task?: Task | null;
    /**
     * 
     * @type {number}
     * @memberof AppDeployment
     */
    postDeploymentTaskId?: number | null;
    /**
     * 
     * @type {Task}
     * @memberof AppDeployment
     */
    postDeploymentTask?: Task | null;
    /**
     * 
     * @type {Array<AppServiceDeployment>}
     * @memberof AppDeployment
     */
    appServiceDeployments: Array<AppServiceDeployment>;
    /**
     * Post-deployment scripts that the deployment's builds provide.
     * @type {Array<string>}
     * @memberof AppDeployment
     */
    postDeploymentScripts: Array<string>;
    /**
     * True when the deployment does not run the post-deployment scripts its builds provide.
     * @type {boolean}
     * @memberof AppDeployment
     */
    skipPostDeploymentScripts: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppDeployment
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppDeployment
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppDeployment
     */
    startedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppDeployment
     */
    endedAt?: string | null;
}


/**
 * @export
 */
export const AppDeploymentRolloutStatusEnum = {
    Unknown: 'unknown',
    Pending: 'pending',
    InProgress: 'in_progress',
    Completed: 'completed',
    Canceled: 'canceled',
    Errored: 'errored'
} as const;
export type AppDeploymentRolloutStatusEnum = typeof AppDeploymentRolloutStatusEnum[keyof typeof AppDeploymentRolloutStatusEnum];

/**
 * @export
 */
export const AppDeploymentRollbackStatusEnum = {
    NotAttempted: 'not_attempted',
    RolledBack: 'rolled_back',
    Failed: 'failed'
} as const;
export type AppDeploymentRollbackStatusEnum = typeof AppDeploymentRollbackStatusEnum[keyof typeof AppDeploymentRollbackStatusEnum];

/**
 * @export
 */
export const AppDeploymentPostDeploymentStatusEnum = {
    Unknown: 'unknown',
    NotApplicable: 'not_applicable',
    Skipped: 'skipped',
    NotRun: 'not_run',
    Pending: 'pending',
    InProgress: 'in_progress',
    Completed: 'completed',
    Failed: 'failed',
    Canceled: 'canceled'
} as const;
export type AppDeploymentPostDeploymentStatusEnum = typeof AppDeploymentPostDeploymentStatusEnum[keyof typeof AppDeploymentPostDeploymentStatusEnum];

/**
 * 
 * @export
 * @interface AppDeploymentsResponse
 */
export interface AppDeploymentsResponse {
    /**
     * 
     * @type {Array<AppDeployment>}
     * @memberof AppDeploymentsResponse
     */
    items: Array<AppDeployment>;
    /**
     * 
     * @type {number}
     * @memberof AppDeploymentsResponse
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof AppDeploymentsResponse
     */
    nextPage?: number | null;
}
/**
 * 
 * @export
 * @interface AppEndpoint
 */
export interface AppEndpoint {
    /**
     * 
     * @type {number}
     * @memberof AppEndpoint
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppEndpoint
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof AppEndpoint
     */
    appServiceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppEndpoint
     */
    appEnvironmentId: number;
    /**
     * 
     * @type {boolean}
     * @memberof AppEndpoint
     */
    primary: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof AppEndpoint
     */
    routeIds: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof AppEndpoint
     */
    portIds: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof AppEndpoint
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppEndpoint
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface AppEnvironment
 */
export interface AppEnvironment {
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    executionMode?: AppEnvironmentExecutionModeEnum;
    /**
     * 
     * @type {Workspace}
     * @memberof AppEnvironment
     */
    workspace?: Workspace;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironment
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    environmentType: AppEnvironmentEnvironmentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    status: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironment
     */
    outdated: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    mainDomain?: string | null;
    /**
     * 
     * @type {AppEnvironmentMainRouteCert}
     * @memberof AppEnvironment
     */
    mainRouteCert: AppEnvironmentMainRouteCert | null;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironment
     */
    appId: number;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironment
     */
    clusterId: number;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironment
     */
    stackId: number;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironment
     */
    stackRevId: number;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    stackName: string;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    stackTitle: string;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    stackIcon: string;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironment
     */
    stackRevNumber: number;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    stackVersion: string;
    /**
     * 
     * @type {AppAccess}
     * @memberof AppEnvironment
     */
    access?: AppAccess | null;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    routingMode: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironment
     */
    routingPending: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironment
     */
    maintenanceMode: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironment
     */
    maintenanceModeActive: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironment
     */
    configurationReady: boolean;
    /**
     * 
     * @type {Array<AppServiceConfigurationIssue>}
     * @memberof AppEnvironment
     */
    configurationIssues: Array<AppServiceConfigurationIssue>;
    /**
     * 
     * @type {AppEnvironmentSettings}
     * @memberof AppEnvironment
     */
    settings?: AppEnvironmentSettings;
    /**
     * 
     * @type {AppEnvironmentHealth}
     * @memberof AppEnvironment
     */
    health: AppEnvironmentHealth;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironment
     */
    updatedAt: string;
}


/**
 * @export
 */
export const AppEnvironmentExecutionModeEnum = {
    Standard: 'standard',
    Workspace: 'workspace'
} as const;
export type AppEnvironmentExecutionModeEnum = typeof AppEnvironmentExecutionModeEnum[keyof typeof AppEnvironmentExecutionModeEnum];

/**
 * @export
 */
export const AppEnvironmentEnvironmentTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type AppEnvironmentEnvironmentTypeEnum = typeof AppEnvironmentEnvironmentTypeEnum[keyof typeof AppEnvironmentEnvironmentTypeEnum];

/**
 * 
 * @export
 * @interface AppEnvironmentAutoStackUpgradeSettings
 */
export interface AppEnvironmentAutoStackUpgradeSettings {
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentAutoStackUpgradeSettings
     */
    enabled: boolean;
    /**
     * 
     * @type {AppEnvironmentStackUpgradeSettings}
     * @memberof AppEnvironmentAutoStackUpgradeSettings
     */
    upgradeSettings?: AppEnvironmentStackUpgradeSettings;
    /**
     * 
     * @type {AutomationTimeWindow}
     * @memberof AppEnvironmentAutoStackUpgradeSettings
     */
    timeWindow?: AutomationTimeWindow;
}
/**
 * 
 * @export
 * @interface AppEnvironmentAutoStackUpgradeSettingsInput
 */
export interface AppEnvironmentAutoStackUpgradeSettingsInput {
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentAutoStackUpgradeSettingsInput
     */
    enabled: boolean;
    /**
     * 
     * @type {AppEnvironmentStackUpgradeSettingsInput}
     * @memberof AppEnvironmentAutoStackUpgradeSettingsInput
     */
    upgradeSettings?: AppEnvironmentStackUpgradeSettingsInput;
    /**
     * 
     * @type {AutomationTimeWindowInput}
     * @memberof AppEnvironmentAutoStackUpgradeSettingsInput
     */
    timeWindow?: AutomationTimeWindowInput;
}
/**
 * 
 * @export
 * @interface AppEnvironmentBackupHealth
 */
export interface AppEnvironmentBackupHealth {
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentBackupHealth
     */
    failingSchedulesCount: number;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentBackupHealth
     */
    latestFailureAt?: string | null;
}
/**
 * 
 * @export
 * @interface AppEnvironmentCICDSettings
 */
export interface AppEnvironmentCICDSettings {
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentCICDSettings
     */
    appEnvironmentId: number;
    /**
     * Effective CI integration ID. Zero selects the built-in Wodby CI service.
     * @type {number}
     * @memberof AppEnvironmentCICDSettings
     */
    ciIntegrationId: number;
    /**
     * Effective registry integration ID. Zero selects the built-in Wodby registry service.
     * @type {number}
     * @memberof AppEnvironmentCICDSettings
     */
    registryIntegrationId: number;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentCICDSettings
     */
    registryRepository: string;
}
/**
 * 
 * @export
 * @interface AppEnvironmentCICDSettingsInput
 */
export interface AppEnvironmentCICDSettingsInput {
    /**
     * CI integration ID. Set to zero to use the built-in Wodby CI service.
     * @type {number}
     * @memberof AppEnvironmentCICDSettingsInput
     */
    ciIntegrationId: number;
    /**
     * Registry integration ID. Set to zero to use the built-in Wodby registry service.
     * @type {number}
     * @memberof AppEnvironmentCICDSettingsInput
     */
    registryIntegrationId: number;
}
/**
 * 
 * @export
 * @interface AppEnvironmentCronHealth
 */
export interface AppEnvironmentCronHealth {
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentCronHealth
     */
    failingSchedulesCount: number;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentCronHealth
     */
    latestFailureAt?: string | null;
}
/**
 * 
 * @export
 * @interface AppEnvironmentHealth
 */
export interface AppEnvironmentHealth {
    /**
     * 
     * @type {AppEnvironmentCronHealth}
     * @memberof AppEnvironmentHealth
     */
    cron: AppEnvironmentCronHealth;
    /**
     * 
     * @type {AppEnvironmentBackupHealth}
     * @memberof AppEnvironmentHealth
     */
    backups: AppEnvironmentBackupHealth;
}
/**
 * 
 * @export
 * @interface AppEnvironmentMainRouteCert
 */
export interface AppEnvironmentMainRouteCert {
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMainRouteCert
     */
    issuer: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentMainRouteCert
     */
    custom: boolean;
}
/**
 * 
 * @export
 * @interface AppEnvironmentMaintenanceModeInput
 */
export interface AppEnvironmentMaintenanceModeInput {
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentMaintenanceModeInput
     */
    enabled: boolean;
}
/**
 * 
 * @export
 * @interface AppEnvironmentMigration
 */
export interface AppEnvironmentMigration {
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentMigration
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentMigration
     */
    appEnvironmentId: number;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentMigration
     */
    sourceClusterId: number;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentMigration
     */
    targetClusterId: number;
    /**
     * Task that runs the migration.
     * @type {number}
     * @memberof AppEnvironmentMigration
     */
    taskId: number;
    /**
     * Deployment that brings the environment up on the target cluster.
     * @type {number}
     * @memberof AppEnvironmentMigration
     */
    deploymentId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMigration
     */
    status: AppEnvironmentMigrationStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMigration
     */
    phase: AppEnvironmentMigrationPhaseEnum;
    /**
     * Services whose data the migration copies with a backup on the source and an import on the target.
     * @type {Array<AppEnvironmentMigrationComponent>}
     * @memberof AppEnvironmentMigration
     */
    components: Array<AppEnvironmentMigrationComponent>;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMigration
     */
    failureMessage: string;
    /**
     * When the retained source is removed automatically.
     * @type {string}
     * @memberof AppEnvironmentMigration
     */
    retainUntil?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMigration
     */
    cutoverAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMigration
     */
    endedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMigration
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMigration
     */
    updatedAt: string;
}


/**
 * @export
 */
export const AppEnvironmentMigrationStatusEnum = {
    Pending: 'pending',
    InProgress: 'in_progress',
    Completed: 'completed',
    Failed: 'failed',
    RollingBack: 'rolling_back',
    RolledBack: 'rolled_back',
    RollbackFailed: 'rollback_failed',
    Cleaned: 'cleaned'
} as const;
export type AppEnvironmentMigrationStatusEnum = typeof AppEnvironmentMigrationStatusEnum[keyof typeof AppEnvironmentMigrationStatusEnum];

/**
 * @export
 */
export const AppEnvironmentMigrationPhaseEnum = {
    Preparing: 'preparing',
    FreezingSource: 'freezing_source',
    BackingUp: 'backing_up',
    RestoringTarget: 'restoring_target',
    CuttingOver: 'cutting_over',
    RetainingSource: 'retaining_source',
    RollingBack: 'rolling_back',
    CleaningSource: 'cleaning_source',
    Done: 'done'
} as const;
export type AppEnvironmentMigrationPhaseEnum = typeof AppEnvironmentMigrationPhaseEnum[keyof typeof AppEnvironmentMigrationPhaseEnum];

/**
 * 
 * @export
 * @interface AppEnvironmentMigrationComponent
 */
export interface AppEnvironmentMigrationComponent {
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentMigrationComponent
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentMigrationComponent
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMigrationComponent
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentMigrationComponent
     */
    backupId: number;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMigrationComponent
     */
    backupStatus?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentMigrationComponent
     */
    importId: number;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentMigrationComponent
     */
    importStatus?: string | null;
}
/**
 * 
 * @export
 * @interface AppEnvironmentMigrationInput
 */
export interface AppEnvironmentMigrationInput {
    /**
     * Cluster of the same organization that the environment moves to.
     * @type {number}
     * @memberof AppEnvironmentMigrationInput
     */
    targetClusterId: number;
    /**
     * Target cluster storage classes for the environment's volumes. A volume left out uses its current storage class, which must exist on the target cluster.
     * @type {Array<AppEnvironmentMigrationVolumeInput>}
     * @memberof AppEnvironmentMigrationInput
     */
    volumes?: Array<AppEnvironmentMigrationVolumeInput>;
}
/**
 * 
 * @export
 * @interface AppEnvironmentMigrationOperationResult
 */
export interface AppEnvironmentMigrationOperationResult {
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentMigrationOperationResult
     */
    success: boolean;
    /**
     * Task that runs the requested step.
     * @type {number}
     * @memberof AppEnvironmentMigrationOperationResult
     */
    taskId?: number | null;
    /**
     * 
     * @type {AppEnvironmentMigration}
     * @memberof AppEnvironmentMigrationOperationResult
     */
    migration: AppEnvironmentMigration;
}
/**
 * 
 * @export
 * @interface AppEnvironmentMigrationVolumeInput
 */
export interface AppEnvironmentMigrationVolumeInput {
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentMigrationVolumeInput
     */
    appServiceVolumeId: number;
    /**
     * Target cluster storage class for the volume.
     * @type {string}
     * @memberof AppEnvironmentMigrationVolumeInput
     */
    storageClassName?: string | null;
}
/**
 * 
 * @export
 * @interface AppEnvironmentSettings
 */
export interface AppEnvironmentSettings {
    /**
     * 
     * @type {AppEnvironmentAutoStackUpgradeSettings}
     * @memberof AppEnvironmentSettings
     */
    autoStackUpgrade?: AppEnvironmentAutoStackUpgradeSettings;
    /**
     * 
     * @type {BuildImageCleanupSettings}
     * @memberof AppEnvironmentSettings
     */
    buildImageCleanup?: BuildImageCleanupSettings;
}
/**
 * 
 * @export
 * @interface AppEnvironmentSettingsInput
 */
export interface AppEnvironmentSettingsInput {
    /**
     * 
     * @type {AppEnvironmentAutoStackUpgradeSettingsInput}
     * @memberof AppEnvironmentSettingsInput
     */
    autoStackUpgrade?: AppEnvironmentAutoStackUpgradeSettingsInput;
    /**
     * Omit it to keep the current build image retention.
     * @type {BuildImageCleanupSettingsInput}
     * @memberof AppEnvironmentSettingsInput
     */
    buildImageCleanup?: BuildImageCleanupSettingsInput;
}
/**
 * 
 * @export
 * @interface AppEnvironmentStackReconciliationInput
 */
export interface AppEnvironmentStackReconciliationInput {
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    versions: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    replicas: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    resources: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    integrations: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    services: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    settings: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    links: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    tokens: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    configs: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    cron: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    volumes: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackReconciliationInput
     */
    main: boolean;
}
/**
 * 
 * @export
 * @interface AppEnvironmentStackUpgradeChangelog
 */
export interface AppEnvironmentStackUpgradeChangelog {
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentStackUpgradeChangelog
     */
    previousStackVersion: string;
    /**
     * 
     * @type {string}
     * @memberof AppEnvironmentStackUpgradeChangelog
     */
    stackVersion: string;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentStackUpgradeChangelog
     */
    previousStackRevNumber: number;
    /**
     * 
     * @type {number}
     * @memberof AppEnvironmentStackUpgradeChangelog
     */
    stackRevNumber: number;
    /**
     * 
     * @type {Array<ServiceRevisionChange>}
     * @memberof AppEnvironmentStackUpgradeChangelog
     */
    serviceChanges: Array<ServiceRevisionChange>;
}
/**
 * 
 * @export
 * @interface AppEnvironmentStackUpgradeInput
 */
export interface AppEnvironmentStackUpgradeInput {
    /**
     * Build affected services when required and deploy the upgraded stack configuration.
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    deployment?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    versions: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    replicas: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    resources: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    integrations: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    services: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    settings: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    links: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    tokens: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    configs: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    cron: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    volumes: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeInput
     */
    main: boolean;
}
/**
 * 
 * @export
 * @interface AppEnvironmentStackUpgradeSettings
 */
export interface AppEnvironmentStackUpgradeSettings {
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    versions: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    replicas: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    resources: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    integrations: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    services: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    settings: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    links: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    tokens: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    configs: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    cron: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    volumes: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettings
     */
    main: boolean;
}
/**
 * 
 * @export
 * @interface AppEnvironmentStackUpgradeSettingsInput
 */
export interface AppEnvironmentStackUpgradeSettingsInput {
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    versions?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    replicas?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    resources?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    integrations?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    services?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    settings?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    links?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    tokens?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    configs?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    cron?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    volumes?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEnvironmentStackUpgradeSettingsInput
     */
    main?: boolean;
}
/**
 * 
 * @export
 * @interface AppPort
 */
export interface AppPort {
    /**
     * 
     * @type {number}
     * @memberof AppPort
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppPort
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppPort
     */
    protocol: string;
    /**
     * 
     * @type {number}
     * @memberof AppPort
     */
    number: number;
    /**
     * 
     * @type {number}
     * @memberof AppPort
     */
    publicPort?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppPort
     */
    _private: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppPort
     */
    appEndpointId: number;
    /**
     * 
     * @type {number}
     * @memberof AppPort
     */
    appInstanceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppPort
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppPort
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppPort
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface AppPortSetting
 */
export interface AppPortSetting {
    /**
     * 
     * @type {number}
     * @memberof AppPortSetting
     */
    id: number;
    /**
     * 
     * @type {AppPortSettingName}
     * @memberof AppPortSetting
     */
    name: AppPortSettingName;
    /**
     * 
     * @type {string}
     * @memberof AppPortSetting
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof AppPortSetting
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppPortSetting
     */
    updatedAt: string;
}


/**
 * 
 * @export
 * @interface AppPortSettingInput
 */
export interface AppPortSettingInput {
    /**
     * 
     * @type {AppPortSettingName}
     * @memberof AppPortSettingInput
     */
    name: AppPortSettingName;
    /**
     * 
     * @type {string}
     * @memberof AppPortSettingInput
     */
    value: string;
}



/**
 * 
 * @export
 */
export const AppPortSettingName = {
    IdleTimeout: 'IDLE_TIMEOUT',
    ConnectionLimit: 'CONNECTION_LIMIT',
    TcpKeepalive: 'TCP_KEEPALIVE'
} as const;
export type AppPortSettingName = typeof AppPortSettingName[keyof typeof AppPortSettingName];

/**
 * 
 * @export
 * @interface AppPortSettingsInput
 */
export interface AppPortSettingsInput {
    /**
     * The complete list of settings. A setting left out is removed.
     * @type {Array<AppPortSettingInput>}
     * @memberof AppPortSettingsInput
     */
    settings: Array<AppPortSettingInput>;
}
/**
 * 
 * @export
 * @interface AppRoute
 */
export interface AppRoute {
    /**
     * 
     * @type {number}
     * @memberof AppRoute
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    host: string;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    path: string;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    pathType: string;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    action: string;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    redirectScheme?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    redirectHost?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    redirectPath?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppRoute
     */
    redirectStatusCode?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    attachmentStatus: AppRouteAttachmentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    attachmentCheckedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    attachmentError?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppRoute
     */
    disabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppRoute
     */
    main: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppRoute
     */
    primary: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppRoute
     */
    _private: boolean;
    /**
     * Whether Wodby generates and manages the route.
     * @type {boolean}
     * @memberof AppRoute
     */
    readonly technical: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppRoute
     */
    appInstanceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppRoute
     */
    appServiceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppRoute
     */
    portId: number;
    /**
     * 
     * @type {Cert}
     * @memberof AppRoute
     */
    cert?: Cert | null;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppRoute
     */
    lastSyncedAt?: string | null;
}


/**
 * @export
 */
export const AppRouteAttachmentStatusEnum = {
    Unknown: 'UNKNOWN',
    Checking: 'CHECKING',
    AwaitingDns: 'AWAITING_DNS',
    NotConnected: 'NOT_CONNECTED',
    Connected: 'CONNECTED',
    Error: 'ERROR'
} as const;
export type AppRouteAttachmentStatusEnum = typeof AppRouteAttachmentStatusEnum[keyof typeof AppRouteAttachmentStatusEnum];

/**
 * 
 * @export
 * @interface AppRouteSetting
 */
export interface AppRouteSetting {
    /**
     * 
     * @type {number}
     * @memberof AppRouteSetting
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppRouteSetting
     */
    appInstanceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppRouteSetting
     */
    routeId: number;
    /**
     * 
     * @type {boolean}
     * @memberof AppRouteSetting
     */
    _default: boolean;
    /**
     * 
     * @type {AppRouteSettingName}
     * @memberof AppRouteSetting
     */
    name: AppRouteSettingName;
    /**
     * 
     * @type {string}
     * @memberof AppRouteSetting
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof AppRouteSetting
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppRouteSetting
     */
    updatedAt: string;
}


/**
 * 
 * @export
 * @interface AppRouteSettingInput
 */
export interface AppRouteSettingInput {
    /**
     * 
     * @type {AppRouteSettingName}
     * @memberof AppRouteSettingInput
     */
    name: AppRouteSettingName;
    /**
     * 
     * @type {string}
     * @memberof AppRouteSettingInput
     */
    value: string;
}



/**
 * 
 * @export
 */
export const AppRouteSettingName = {
    HttpsRedirect: 'HTTPS_REDIRECT',
    NoIndex: 'NO_INDEX',
    RequestBodySize: 'REQUEST_BODY_SIZE',
    SessionAffinity: 'SESSION_AFFINITY',
    PathRewrite: 'PATH_REWRITE',
    Hsts: 'HSTS',
    RequestTimeout: 'REQUEST_TIMEOUT',
    BackendRequestTimeout: 'BACKEND_REQUEST_TIMEOUT',
    RateLimitPerIp: 'RATE_LIMIT_PER_IP',
    RateLimitTotal: 'RATE_LIMIT_TOTAL'
} as const;
export type AppRouteSettingName = typeof AppRouteSettingName[keyof typeof AppRouteSettingName];


/**
 * 
 * @export
 */
export const AppRouteSettingSource = {
    AppDefault: 'APP_DEFAULT',
    ServiceDefault: 'SERVICE_DEFAULT',
    RouteOverride: 'ROUTE_OVERRIDE'
} as const;
export type AppRouteSettingSource = typeof AppRouteSettingSource[keyof typeof AppRouteSettingSource];

/**
 * 
 * @export
 * @interface AppRouteSettingsInput
 */
export interface AppRouteSettingsInput {
    /**
     * The complete list of settings. A setting left out is removed.
     * @type {Array<AppRouteSettingInput>}
     * @memberof AppRouteSettingsInput
     */
    settings: Array<AppRouteSettingInput>;
}
/**
 * 
 * @export
 * @interface AppRouteTLSInput
 */
export interface AppRouteTLSInput {
    /**
     * 
     * @type {string}
     * @memberof AppRouteTLSInput
     */
    mode: AppRouteTLSInputModeEnum;
    /**
     * Required only when mode is CUSTOM.
     * @type {number}
     * @memberof AppRouteTLSInput
     */
    certId?: number | null;
}


/**
 * @export
 */
export const AppRouteTLSInputModeEnum = {
    None: 'NONE',
    LetsEncrypt: 'LETS_ENCRYPT',
    Custom: 'CUSTOM'
} as const;
export type AppRouteTLSInputModeEnum = typeof AppRouteTLSInputModeEnum[keyof typeof AppRouteTLSInputModeEnum];

/**
 * 
 * @export
 * @interface AppService
 */
export interface AppService {
    /**
     * 
     * @type {number}
     * @memberof AppService
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppService
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppService
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof AppService
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof AppService
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof AppService
     */
    replicas: number;
    /**
     * 
     * @type {AppServiceScalability}
     * @memberof AppService
     */
    scalability?: AppServiceScalability | null;
    /**
     * 
     * @type {string}
     * @memberof AppService
     */
    version: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppService
     */
    main: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppService
     */
    disabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppService
     */
    external: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppService
     */
    required: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppService
     */
    needsRebuild: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppService
     */
    needsRedeploy: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppService
     */
    stackState: AppServiceStackStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AppService
     */
    configurationReady: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppService
     */
    buildSourceBoilerplate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppService
     */
    ciPolicy: AppServiceCiPolicyEnum;
    /**
     * 
     * @type {number}
     * @memberof AppService
     */
    effectiveCiIntegrationId?: number | null;
    /**
     * 
     * @type {Array<AppServiceConfigurationIssue>}
     * @memberof AppService
     */
    configurationIssues: Array<AppServiceConfigurationIssue>;
    /**
     * 
     * @type {number}
     * @memberof AppService
     */
    appInstanceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppService
     */
    serviceRevId: number;
    /**
     * 
     * @type {number}
     * @memberof AppService
     */
    parentAppServiceId?: number | null;
    /**
     * 
     * @type {ServiceDeploymentConfiguration}
     * @memberof AppService
     */
    deploymentConfiguration: ServiceDeploymentConfiguration;
    /**
     * 
     * @type {string}
     * @memberof AppService
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppService
     */
    updatedAt: string;
}


/**
 * @export
 */
export const AppServiceStackStateEnum = {
    Current: 'current',
    NeedsRebuild: 'needs_rebuild',
    NeedsRedeploy: 'needs_redeploy'
} as const;
export type AppServiceStackStateEnum = typeof AppServiceStackStateEnum[keyof typeof AppServiceStackStateEnum];

/**
 * @export
 */
export const AppServiceCiPolicyEnum = {
    Inherit: 'INHERIT',
    Wodby: 'WODBY',
    Integration: 'INTEGRATION'
} as const;
export type AppServiceCiPolicyEnum = typeof AppServiceCiPolicyEnum[keyof typeof AppServiceCiPolicyEnum];

/**
 * 
 * @export
 * @interface AppServiceAnnotation
 */
export interface AppServiceAnnotation {
    /**
     * 
     * @type {number}
     * @memberof AppServiceAnnotation
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceAnnotation
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceAnnotation
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceAnnotation
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceAnnotation
     */
    envType?: string | null;
    /**
     * 
     * @type {AppServiceAnnotationSource}
     * @memberof AppServiceAnnotation
     */
    source?: AppServiceAnnotationSource | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceAnnotation
     */
    createdAt?: string | null;
}
/**
 * 
 * @export
 * @interface AppServiceAnnotationSource
 */
export interface AppServiceAnnotationSource {
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceAnnotationSource
     */
    fromService: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceAnnotationSource
     */
    fromStack: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceAnnotationSource
     */
    fromWodby: boolean;
}
/**
 * 
 * @export
 * @interface AppServiceBuild
 */
export interface AppServiceBuild {
    /**
     * 
     * @type {number}
     * @memberof AppServiceBuild
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuild
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuild
     */
    image: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceBuild
     */
    imageDeleted: boolean;
    /**
     * True when the image was built from a Dockerfile that does not derive from the service image, so it no longer tracks service image updates.
     * @type {boolean}
     * @memberof AppServiceBuild
     */
    unmanagedImage: boolean;
    /**
     * Repository path of an author-provided Dockerfile. Empty when the build used a service-provided or generated Dockerfile.
     * @type {string}
     * @memberof AppServiceBuild
     */
    dockerfilePath: string;
    /**
     * SHA-256 of the Dockerfile that produced the image. Empty when the build did not report it.
     * @type {string}
     * @memberof AppServiceBuild
     */
    dockerfileHash: string;
    /**
     * 
     * @type {number}
     * @memberof AppServiceBuild
     */
    size: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceBuild
     */
    appServiceId: number;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceBuild
     */
    previouslyDeployed: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceBuild
     */
    currentlyDeployed: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppServiceBuild
     */
    currentBuildNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuild
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuild
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface AppServiceBuildArg
 */
export interface AppServiceBuildArg {
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuildArg
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuildArg
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceBuildArg
     */
    secret: boolean;
}
/**
 * 
 * @export
 * @interface AppServiceBuildConfig
 */
export interface AppServiceBuildConfig {
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuildConfig
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuildConfig
     */
    title: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceBuildConfig
     */
    managed: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceBuildConfig
     */
    main: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuildConfig
     */
    image: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuildConfig
     */
    dockerfile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceBuildConfig
     */
    dockerignore?: string | null;
    /**
     * Resolved subdirectory this build copies, applied under both the CI --from and --to paths. Empty means the whole context.
     * @type {string}
     * @memberof AppServiceBuildConfig
     */
    copySubdir: string;
    /**
     * 
     * @type {Array<AppServiceBuildArg>}
     * @memberof AppServiceBuildConfig
     */
    args?: Array<AppServiceBuildArg> | null;
}
/**
 * 
 * @export
 * @interface AppServiceCapacityPreflight
 */
export interface AppServiceCapacityPreflight {
    /**
     * Whether the proposed usage increase is permitted by the effective backend policy.
     * @type {boolean}
     * @memberof AppServiceCapacityPreflight
     */
    allowed: boolean;
    /**
     * Whether subscription capacity limits apply to this organization.
     * @type {boolean}
     * @memberof AppServiceCapacityPreflight
     */
    enforced: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppServiceCapacityPreflight
     */
    usage: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceCapacityPreflight
     */
    usageIncluded: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceCapacityPreflight
     */
    projectedUsage: number;
}
/**
 * 
 * @export
 * @interface AppServiceCapacityPreflightRequest
 */
export interface AppServiceCapacityPreflightRequest {
    /**
     * Number of enabled app services the operation would add.
     * @type {number}
     * @memberof AppServiceCapacityPreflightRequest
     */
    additionalUsage: number;
}
/**
 * 
 * @export
 * @interface AppServiceConfig
 */
export interface AppServiceConfig {
    /**
     * 
     * @type {number}
     * @memberof AppServiceConfig
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceConfig
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceConfig
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceConfig
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceConfig
     */
    config?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceConfig
     */
    disabled: boolean;
}
/**
 * 
 * @export
 * @interface AppServiceConfigurationIssue
 */
export interface AppServiceConfigurationIssue {
    /**
     * 
     * @type {number}
     * @memberof AppServiceConfigurationIssue
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceConfigurationIssue
     */
    appServiceName: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceConfigurationIssue
     */
    appServiceTitle: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceConfigurationIssue
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceConfigurationIssue
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceConfigurationIssue
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceConfigurationIssue
     */
    message: string;
}
/**
 * 
 * @export
 * @interface AppServiceContainer
 */
export interface AppServiceContainer {
    /**
     * 
     * @type {GPUResources}
     * @memberof AppServiceContainer
     */
    gpu?: GPUResources | null;
    /**
     * 
     * @type {number}
     * @memberof AppServiceContainer
     */
    id?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServiceContainer
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceContainer
     */
    workload: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceContainer
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof AppServiceContainer
     */
    requestCPU?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServiceContainer
     */
    requestMem?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServiceContainer
     */
    limitCPU?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServiceContainer
     */
    limitMem?: number | null;
}
/**
 * 
 * @export
 * @interface AppServiceCronJob
 */
export interface AppServiceCronJob {
    /**
     * 
     * @type {number}
     * @memberof AppServiceCronJob
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceCronJob
     */
    appServiceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceCronJob
     */
    scheduleId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServiceCronJob
     */
    taskId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronJob
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronJob
     */
    command: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronJob
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronJob
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronJob
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface AppServiceCronJobsResponse
 */
export interface AppServiceCronJobsResponse {
    /**
     * 
     * @type {Array<AppServiceCronJob>}
     * @memberof AppServiceCronJobsResponse
     */
    items: Array<AppServiceCronJob>;
    /**
     * 
     * @type {number}
     * @memberof AppServiceCronJobsResponse
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceCronJobsResponse
     */
    nextPage?: number | null;
}
/**
 * 
 * @export
 * @interface AppServiceCronSchedule
 */
export interface AppServiceCronSchedule {
    /**
     * 
     * @type {number}
     * @memberof AppServiceCronSchedule
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceCronSchedule
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronSchedule
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronSchedule
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronSchedule
     */
    crontab: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronSchedule
     */
    command: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronSchedule
     */
    workload?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceCronSchedule
     */
    disabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronSchedule
     */
    envType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronSchedule
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceCronSchedule
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface AppServiceDatabaseInput
 */
export interface AppServiceDatabaseInput {
    /**
     * 
     * @type {number}
     * @memberof AppServiceDatabaseInput
     */
    databaseId: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceDatabaseInput
     */
    databaseDbId?: number | null;
}
/**
 * 
 * @export
 * @interface AppServiceDeployment
 */
export interface AppServiceDeployment {
    /**
     * 
     * @type {number}
     * @memberof AppServiceDeployment
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceDeployment
     */
    jobName: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceDeployment
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof AppServiceDeployment
     */
    appServiceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceDeployment
     */
    appServiceBuildId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServiceDeployment
     */
    previousAppServiceBuildId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceDeployment
     */
    buildSelectionKind: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceDeployment
     */
    skipPostDeployment: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceDeployment
     */
    force: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppServiceDeployment
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceDeployment
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceDeployment
     */
    startedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceDeployment
     */
    endedAt?: string | null;
}
/**
 * 
 * @export
 * @interface AppServiceDeploymentRequest
 */
export interface AppServiceDeploymentRequest {
    /**
     * 
     * @type {number}
     * @memberof AppServiceDeploymentRequest
     */
    appServiceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceDeploymentRequest
     */
    appServiceBuildId?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceDeploymentRequest
     */
    skipPostDeployment?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceDeploymentRequest
     */
    force: boolean;
}
/**
 * 
 * @export
 * @interface AppServiceEnvVar
 */
export interface AppServiceEnvVar {
    /**
     * 
     * @type {number}
     * @memberof AppServiceEnvVar
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceEnvVar
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceEnvVar
     */
    workload: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceEnvVar
     */
    container: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceEnvVar
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceEnvVar
     */
    value: string;
    /**
     * 
     * @type {number}
     * @memberof AppServiceEnvVar
     */
    valueSecretId?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceEnvVar
     */
    runtime: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceEnvVar
     */
    build: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppServiceEnvVar
     */
    envType?: string | null;
    /**
     * 
     * @type {AppServiceEnvVarSource}
     * @memberof AppServiceEnvVar
     */
    source?: AppServiceEnvVarSource | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceEnvVar
     */
    createdAt?: string | null;
}
/**
 * 
 * @export
 * @interface AppServiceEnvVarSource
 */
export interface AppServiceEnvVarSource {
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceEnvVarSource
     */
    fromService: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceEnvVarSource
     */
    fromStack: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceEnvVarSource
     */
    fromWodby: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppServiceEnvVarSource
     */
    setting?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceEnvVarSource
     */
    link?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceEnvVarSource
     */
    integration?: string | null;
}
/**
 * 
 * @export
 * @interface AppServiceHelmValue
 */
export interface AppServiceHelmValue {
    /**
     * 
     * @type {number}
     * @memberof AppServiceHelmValue
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceHelmValue
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceHelmValue
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceHelmValue
     */
    value: string;
    /**
     * 
     * @type {number}
     * @memberof AppServiceHelmValue
     */
    valueSecretId?: number | null;
    /**
     * 
     * @type {AppServiceHelmValueSource}
     * @memberof AppServiceHelmValue
     */
    source?: AppServiceHelmValueSource | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceHelmValue
     */
    createdAt?: string | null;
}
/**
 * 
 * @export
 * @interface AppServiceHelmValueSource
 */
export interface AppServiceHelmValueSource {
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceHelmValueSource
     */
    fromService: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceHelmValueSource
     */
    fromStack: boolean;
}
/**
 * 
 * @export
 * @interface AppServiceInput
 */
export interface AppServiceInput {
    /**
     * 
     * @type {number}
     * @memberof AppServiceInput
     */
    replicas?: number | null;
    /**
     * 
     * @type {AppServiceScalabilityUpdateInput}
     * @memberof AppServiceInput
     */
    scalability?: AppServiceScalabilityUpdateInput;
    /**
     * 
     * @type {string}
     * @memberof AppServiceInput
     */
    version?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceInput
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceInput
     */
    main?: boolean | null;
    /**
     * 
     * @type {BuildSourceInput}
     * @memberof AppServiceInput
     */
    buildSource?: BuildSourceInput;
    /**
     * 
     * @type {ServiceDeploymentConfigurationInput}
     * @memberof AppServiceInput
     */
    deployment?: ServiceDeploymentConfigurationInput;
}
/**
 * 
 * @export
 * @interface AppServiceIntegration
 */
export interface AppServiceIntegration {
    /**
     * 
     * @type {number}
     * @memberof AppServiceIntegration
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceIntegration
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceIntegration
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof AppServiceIntegration
     */
    integrationId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceIntegration
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceIntegration
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface AppServiceIntegrationInput
 */
export interface AppServiceIntegrationInput {
    /**
     * 
     * @type {string}
     * @memberof AppServiceIntegrationInput
     */
    name: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof AppServiceIntegrationInput
     */
    integrationIds: Array<number>;
}
/**
 * 
 * @export
 * @interface AppServiceLink
 */
export interface AppServiceLink {
    /**
     * 
     * @type {number}
     * @memberof AppServiceLink
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceLink
     */
    appServiceId: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceLink
     */
    linkedAppServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceLink
     */
    name: string;
}
/**
 * 
 * @export
 * @interface AppServiceLinkInput
 */
export interface AppServiceLinkInput {
    /**
     * 
     * @type {number}
     * @memberof AppServiceLinkInput
     */
    linkedAppServiceId?: number | null;
}
/**
 * 
 * @export
 * @interface AppServicePod
 */
export interface AppServicePod {
    /**
     * 
     * @type {string}
     * @memberof AppServicePod
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof AppServicePod
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServicePod
     */
    workload: string;
    /**
     * 
     * @type {string}
     * @memberof AppServicePod
     */
    kubeWorkloadName: string;
    /**
     * 
     * @type {string}
     * @memberof AppServicePod
     */
    node?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServicePod
     */
    phase: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppServicePod
     */
    ready: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServicePod
     */
    terminating: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppServicePod
     */
    reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServicePod
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServicePod
     */
    createdAt: string;
    /**
     * CPU cores in use.
     * @type {number}
     * @memberof AppServicePod
     */
    cpuUsage?: number | null;
    /**
     * Memory in use in bytes.
     * @type {number}
     * @memberof AppServicePod
     */
    memoryUsage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePod
     */
    cpuRequest?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePod
     */
    memoryRequest?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePod
     */
    cpuLimit?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePod
     */
    memoryLimit?: number | null;
    /**
     * 
     * @type {Array<AppServicePodContainer>}
     * @memberof AppServicePod
     */
    containers: Array<AppServicePodContainer>;
}
/**
 * 
 * @export
 * @interface AppServicePodContainer
 */
export interface AppServicePodContainer {
    /**
     * 
     * @type {string}
     * @memberof AppServicePodContainer
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof AppServicePodContainer
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppServicePodContainer
     */
    primary: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServicePodContainer
     */
    ready: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppServicePodContainer
     */
    restarts: number;
    /**
     * 
     * @type {string}
     * @memberof AppServicePodContainer
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof AppServicePodContainer
     */
    reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServicePodContainer
     */
    message?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePodContainer
     */
    exitCode?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppServicePodContainer
     */
    startedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServicePodContainer
     */
    finishedAt?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePodContainer
     */
    cpuUsage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePodContainer
     */
    memoryUsage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePodContainer
     */
    cpuRequest?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePodContainer
     */
    memoryRequest?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePodContainer
     */
    cpuLimit?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServicePodContainer
     */
    memoryLimit?: number | null;
}
/**
 * 
 * @export
 * @interface AppServiceScalability
 */
export interface AppServiceScalability {
    /**
     * 
     * @type {number}
     * @memberof AppServiceScalability
     */
    averageCPU: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceScalability
     */
    minReplicas: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceScalability
     */
    maxReplicas: number;
}
/**
 * 
 * @export
 * @interface AppServiceScalabilityUpdateInput
 */
export interface AppServiceScalabilityUpdateInput {
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceScalabilityUpdateInput
     */
    enabled: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppServiceScalabilityUpdateInput
     */
    averageCPU?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServiceScalabilityUpdateInput
     */
    minReplicas?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServiceScalabilityUpdateInput
     */
    maxReplicas?: number | null;
}
/**
 * 
 * @export
 * @interface AppServiceSetting
 */
export interface AppServiceSetting {
    /**
     * 
     * @type {number}
     * @memberof AppServiceSetting
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceSetting
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceSetting
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceSetting
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceSetting
     */
    secret: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceSetting
     */
    hasValue: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppServiceSetting
     */
    _var: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceSetting
     */
    runtime: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceSetting
     */
    build: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppServiceSetting
     */
    fromSettingId?: number | null;
}
/**
 * 
 * @export
 * @interface AppServiceSettingInput
 */
export interface AppServiceSettingInput {
    /**
     * 
     * @type {string}
     * @memberof AppServiceSettingInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceSettingInput
     */
    value: string;
}
/**
 * 
 * @export
 * @interface AppServiceToken
 */
export interface AppServiceToken {
    /**
     * 
     * @type {number}
     * @memberof AppServiceToken
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceToken
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceToken
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceToken
     */
    value: string;
    /**
     * 
     * @type {number}
     * @memberof AppServiceToken
     */
    valueSecretId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceToken
     */
    envType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppServiceToken
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface AppServiceVolume
 */
export interface AppServiceVolume {
    /**
     * 
     * @type {number}
     * @memberof AppServiceVolume
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof AppServiceVolume
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceVolume
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppServiceVolume
     */
    path: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceVolume
     */
    shared: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceVolume
     */
    readOnly: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppServiceVolume
     */
    size: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceVolume
     */
    configuredStorageClassName?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppServiceVolume
     */
    effectiveStorageClassNames: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof AppServiceVolume
     */
    storageClassStatus: AppServiceVolumeStorageClassStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AppServiceVolume
     */
    storageClassSelectable: boolean;
    /**
     * 
     * @type {number}
     * @memberof AppServiceVolume
     */
    fromVolumeId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AppServiceVolume
     */
    storageAppServiceId?: number | null;
}


/**
 * @export
 */
export const AppServiceVolumeStorageClassStatusEnum = {
    Current: 'current',
    Mismatch: 'mismatch',
    Mixed: 'mixed',
    Unknown: 'unknown',
    Unavailable: 'unavailable'
} as const;
export type AppServiceVolumeStorageClassStatusEnum = typeof AppServiceVolumeStorageClassStatusEnum[keyof typeof AppServiceVolumeStorageClassStatusEnum];

/**
 * 
 * @export
 * @interface AppServiceVolumeStorageClassState
 */
export interface AppServiceVolumeStorageClassState {
    /**
     * 
     * @type {number}
     * @memberof AppServiceVolumeStorageClassState
     */
    volumeId: number;
    /**
     * 
     * @type {string}
     * @memberof AppServiceVolumeStorageClassState
     */
    configuredStorageClassName?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppServiceVolumeStorageClassState
     */
    effectiveStorageClassNames: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof AppServiceVolumeStorageClassState
     */
    status: string;
}
/**
 * 
 * @export
 * @interface AutomationTimeWindow
 */
export interface AutomationTimeWindow {
    /**
     * 
     * @type {string}
     * @memberof AutomationTimeWindow
     */
    start: string;
    /**
     * 
     * @type {string}
     * @memberof AutomationTimeWindow
     */
    end: string;
    /**
     * 
     * @type {string}
     * @memberof AutomationTimeWindow
     */
    timeZone: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AutomationTimeWindow
     */
    days: Array<AutomationTimeWindowDaysEnum>;
}


/**
 * @export
 */
export const AutomationTimeWindowDaysEnum = {
    Monday: 'MONDAY',
    Tuesday: 'TUESDAY',
    Wednesday: 'WEDNESDAY',
    Thursday: 'THURSDAY',
    Friday: 'FRIDAY',
    Saturday: 'SATURDAY',
    Sunday: 'SUNDAY'
} as const;
export type AutomationTimeWindowDaysEnum = typeof AutomationTimeWindowDaysEnum[keyof typeof AutomationTimeWindowDaysEnum];

/**
 * 
 * @export
 * @interface AutomationTimeWindowInput
 */
export interface AutomationTimeWindowInput {
    /**
     * Set to false to remove the configured time window.
     * @type {boolean}
     * @memberof AutomationTimeWindowInput
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof AutomationTimeWindowInput
     */
    start?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AutomationTimeWindowInput
     */
    end?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AutomationTimeWindowInput
     */
    timeZone?: string | null;
    /**
     * Selected weekdays. Omit for every day. Overnight windows use the day on which the window starts.
     * @type {Array<string>}
     * @memberof AutomationTimeWindowInput
     */
    days?: Array<AutomationTimeWindowInputDaysEnum> | null;
}


/**
 * @export
 */
export const AutomationTimeWindowInputDaysEnum = {
    Monday: 'MONDAY',
    Tuesday: 'TUESDAY',
    Wednesday: 'WEDNESDAY',
    Thursday: 'THURSDAY',
    Friday: 'FRIDAY',
    Saturday: 'SATURDAY',
    Sunday: 'SUNDAY'
} as const;
export type AutomationTimeWindowInputDaysEnum = typeof AutomationTimeWindowInputDaysEnum[keyof typeof AutomationTimeWindowInputDaysEnum];

/**
 * 
 * @export
 * @interface Backup
 */
export interface Backup {
    /**
     * 
     * @type {number}
     * @memberof Backup
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof Backup
     */
    appInstanceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Backup
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Backup
     */
    databaseId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Backup
     */
    databaseDbId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Backup
     */
    backupPresetId?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof Backup
     */
    manual: boolean;
    /**
     * Storage integration that owns the backup. Null identifies Wodby's built-in blob storage.
     * @type {number}
     * @memberof Backup
     */
    integrationId: number | null;
    /**
     * Region used by Wodby Blob Storage. Null for third-party storage and legacy backups.
     * @type {string}
     * @memberof Backup
     */
    blobStorageRegion?: BackupBlobStorageRegionEnum | null;
    /**
     * 
     * @type {number}
     * @memberof Backup
     */
    taskId?: number | null;
    /**
     * Final stored archive size in bytes. Null when the size has not been recorded.
     * @type {number}
     * @memberof Backup
     */
    size?: number | null;
    /**
     * Whether the stored backup file has been permanently removed.
     * @type {boolean}
     * @memberof Backup
     */
    fileDeleted: boolean;
    /**
     * Whether the backup file can be permanently removed now.
     * @type {boolean}
     * @memberof Backup
     */
    canVoidFile: boolean;
    /**
     * 
     * @type {Array<BackupOption>}
     * @memberof Backup
     */
    options: Array<BackupOption>;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    startedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    endedAt?: string | null;
}


/**
 * @export
 */
export const BackupBlobStorageRegionEnum = {
    Eu: 'eu',
    Us: 'us'
} as const;
export type BackupBlobStorageRegionEnum = typeof BackupBlobStorageRegionEnum[keyof typeof BackupBlobStorageRegionEnum];

/**
 * 
 * @export
 * @interface BackupDownload
 */
export interface BackupDownload {
    /**
     * 
     * @type {string}
     * @memberof BackupDownload
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof BackupDownload
     */
    expiresAt: string;
}
/**
 * 
 * @export
 * @interface BackupOption
 */
export interface BackupOption {
    /**
     * 
     * @type {string}
     * @memberof BackupOption
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BackupOption
     */
    values: Array<string>;
}
/**
 * 
 * @export
 * @interface BackupPreset
 */
export interface BackupPreset {
    /**
     * 
     * @type {number}
     * @memberof BackupPreset
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof BackupPreset
     */
    appInstanceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BackupPreset
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BackupPreset
     */
    databaseId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BackupPreset
     */
    databaseDbId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BackupPreset
     */
    orgId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BackupPreset
     */
    envId?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof BackupPreset
     */
    envTypes: Array<BackupPresetEnvTypesEnum>;
    /**
     * 
     * @type {string}
     * @memberof BackupPreset
     */
    backupCategory: BackupPresetBackupCategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof BackupPreset
     */
    backupName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BackupPreset
     */
    integrationId: number;
    /**
     * 
     * @type {string}
     * @memberof BackupPreset
     */
    bucket: string;
    /**
     * 
     * @type {string}
     * @memberof BackupPreset
     */
    storageClass?: string | null;
    /**
     * Region used by Wodby Blob Storage. Null for third-party storage and legacy presets.
     * @type {string}
     * @memberof BackupPreset
     */
    blobStorageRegion?: BackupPresetBlobStorageRegionEnum | null;
    /**
     * 
     * @type {Array<BackupOption>}
     * @memberof BackupPreset
     */
    options: Array<BackupOption>;
    /**
     * 
     * @type {boolean}
     * @memberof BackupPreset
     */
    override: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BackupPreset
     */
    auto: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BackupPreset
     */
    disabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof BackupPreset
     */
    crontab?: string | null;
    /**
     * 
     * @type {AutomationTimeWindow}
     * @memberof BackupPreset
     */
    timeWindow?: AutomationTimeWindow;
    /**
     * 
     * @type {number}
     * @memberof BackupPreset
     */
    duration?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BackupPreset
     */
    nextRunAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackupPreset
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof BackupPreset
     */
    updatedAt: string;
}


/**
 * @export
 */
export const BackupPresetEnvTypesEnum = {
    Dev: 'dev',
    Feature: 'feature',
    Test: 'test',
    Staging: 'staging',
    Prod: 'prod'
} as const;
export type BackupPresetEnvTypesEnum = typeof BackupPresetEnvTypesEnum[keyof typeof BackupPresetEnvTypesEnum];

/**
 * @export
 */
export const BackupPresetBackupCategoryEnum = {
    Any: 'any',
    Files: 'files',
    Database: 'database'
} as const;
export type BackupPresetBackupCategoryEnum = typeof BackupPresetBackupCategoryEnum[keyof typeof BackupPresetBackupCategoryEnum];

/**
 * @export
 */
export const BackupPresetBlobStorageRegionEnum = {
    Eu: 'eu',
    Us: 'us'
} as const;
export type BackupPresetBlobStorageRegionEnum = typeof BackupPresetBlobStorageRegionEnum[keyof typeof BackupPresetBlobStorageRegionEnum];

/**
 * 
 * @export
 * @interface BackupsResponse
 */
export interface BackupsResponse {
    /**
     * 
     * @type {Array<Backup>}
     * @memberof BackupsResponse
     */
    items: Array<Backup>;
    /**
     * 
     * @type {number}
     * @memberof BackupsResponse
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof BackupsResponse
     */
    nextPage?: number | null;
}

/**
 * 
 * @export
 */
export const BillingSubscriptionStatus = {
    Active: 'ACTIVE',
    Expired: 'EXPIRED',
    Creating: 'CREATING',
    Updating: 'UPDATING',
    Errored: 'ERRORED',
    Renewing: 'RENEWING',
    Canceling: 'CANCELING'
} as const;
export type BillingSubscriptionStatus = typeof BillingSubscriptionStatus[keyof typeof BillingSubscriptionStatus];

/**
 * How long images of unused builds are kept in the Wodby container registry before they are voided.
 * @export
 * @interface BuildImageCleanupSettings
 */
export interface BuildImageCleanupSettings {
    /**
     * Age after which images of unused builds are voided automatically. never disables the cleanup.
     * @type {string}
     * @memberof BuildImageCleanupSettings
     */
    retention: BuildImageCleanupSettingsRetentionEnum;
}


/**
 * @export
 */
export const BuildImageCleanupSettingsRetentionEnum = {
    Never: 'never',
    OneMonth: 'one_month',
    ThreeMonths: 'three_months',
    SixMonths: 'six_months',
    OneYear: 'one_year'
} as const;
export type BuildImageCleanupSettingsRetentionEnum = typeof BuildImageCleanupSettingsRetentionEnum[keyof typeof BuildImageCleanupSettingsRetentionEnum];

/**
 * 
 * @export
 * @interface BuildImageCleanupSettingsInput
 */
export interface BuildImageCleanupSettingsInput {
    /**
     * 
     * @type {string}
     * @memberof BuildImageCleanupSettingsInput
     */
    retention: BuildImageCleanupSettingsInputRetentionEnum;
}


/**
 * @export
 */
export const BuildImageCleanupSettingsInputRetentionEnum = {
    Never: 'never',
    OneMonth: 'one_month',
    ThreeMonths: 'three_months',
    SixMonths: 'six_months',
    OneYear: 'one_year'
} as const;
export type BuildImageCleanupSettingsInputRetentionEnum = typeof BuildImageCleanupSettingsInputRetentionEnum[keyof typeof BuildImageCleanupSettingsInputRetentionEnum];

/**
 * 
 * @export
 * @interface BuildSourceInput
 */
export interface BuildSourceInput {
    /**
     * 
     * @type {string}
     * @memberof BuildSourceInput
     */
    buildSourceType: string;
    /**
     * 
     * @type {string}
     * @memberof BuildSourceInput
     */
    boilerplate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BuildSourceInput
     */
    newRepoName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BuildSourceInput
     */
    integrationId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BuildSourceInput
     */
    remoteGitRepoId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BuildSourceInput
     */
    gitRef?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BuildSourceInput
     */
    gitRefType?: string | null;
}
/**
 * 
 * @export
 * @interface BulkAppRouteOperationInput
 */
export interface BulkAppRouteOperationInput {
    /**
     * 
     * @type {number}
     * @memberof BulkAppRouteOperationInput
     */
    appEnvironmentId: number;
    /**
     * Routes of the app environment to change.
     * @type {Array<number>}
     * @memberof BulkAppRouteOperationInput
     */
    routeIds: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof BulkAppRouteOperationInput
     */
    operation: BulkAppRouteOperationInputOperationEnum;
}


/**
 * @export
 */
export const BulkAppRouteOperationInputOperationEnum = {
    Enable: 'enable',
    Disable: 'disable',
    Delete: 'delete'
} as const;
export type BulkAppRouteOperationInputOperationEnum = typeof BulkAppRouteOperationInputOperationEnum[keyof typeof BulkAppRouteOperationInputOperationEnum];

/**
 * 
 * @export
 * @interface Cert
 */
export interface Cert {
    /**
     * 
     * @type {number}
     * @memberof Cert
     */
    id: number;
    /**
     * 
     * @type {boolean}
     * @memberof Cert
     */
    custom: boolean;
    /**
     * Issuer label: a certificate authority name for uploaded or temporary AWS certificates, otherwise the managed issuer identifier.
     * @type {string}
     * @memberof Cert
     */
    issuer: string;
    /**
     * 
     * @type {string}
     * @memberof Cert
     */
    domain: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Cert
     */
    dnsNames: Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Cert
     */
    routeIds: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof Cert
     */
    fingerprint?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Cert
     */
    keyType: string;
    /**
     * 
     * @type {number}
     * @memberof Cert
     */
    keyLength: number;
    /**
     * 
     * @type {string}
     * @memberof Cert
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof Cert
     */
    appInstanceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Cert
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Cert
     */
    databaseId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Cert
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Cert
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof Cert
     */
    issuedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Cert
     */
    renewsAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Cert
     */
    expiresAt?: string | null;
}
/**
 * 
 * @export
 * @interface CloudGPU
 */
export interface CloudGPU {
    /**
     * 
     * @type {string}
     * @memberof CloudGPU
     */
    manufacturer: string;
    /**
     * 
     * @type {string}
     * @memberof CloudGPU
     */
    model: string;
    /**
     * 
     * @type {number}
     * @memberof CloudGPU
     */
    count: number;
    /**
     * Memory per device in MiB; absent when the provider does not report it.
     * @type {number}
     * @memberof CloudGPU
     */
    memoryMiB?: number | null;
}
/**
 * 
 * @export
 * @interface CloudMachineType
 */
export interface CloudMachineType {
    /**
     * 
     * @type {string}
     * @memberof CloudMachineType
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof CloudMachineType
     */
    cpu?: number;
    /**
     * 
     * @type {number}
     * @memberof CloudMachineType
     */
    mem?: number;
    /**
     * 
     * @type {number}
     * @memberof CloudMachineType
     */
    disk?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CloudMachineType
     */
    sharedCPU?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CloudMachineType
     */
    available?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CloudMachineType
     */
    family?: string;
    /**
     * 
     * @type {number}
     * @memberof CloudMachineType
     */
    minStorageSize?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CloudMachineType
     */
    maxStorageSize?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CloudMachineType
     */
    minIOPS?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CloudMachineType
     */
    maxIOPS?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CloudMachineType
     */
    defaultIOPS?: number | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof CloudMachineType
     */
    storageOptions?: Array<{ [key: string]: any; }>;
    /**
     * Provider-reported devices. This does not guarantee driver setup or spare capacity.
     * @type {Array<CloudGPU>}
     * @memberof CloudMachineType
     */
    gpus?: Array<CloudGPU> | null;
}
/**
 * 
 * @export
 * @interface Cluster
 */
export interface Cluster {
    /**
     * 
     * @type {number}
     * @memberof Cluster
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    status: string;
    /**
     * 
     * @type {boolean}
     * @memberof Cluster
     */
    serverless: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Cluster
     */
    demo: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Cluster
     */
    wodby: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Cluster
     */
    k3s: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Cluster
     */
    singleNode: boolean;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    version?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    infraVersion: string;
    /**
     * 
     * @type {number}
     * @memberof Cluster
     */
    minNodeCount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Cluster
     */
    maxNodeCount?: number | null;
    /**
     * 
     * @type {ClusterNodePool}
     * @memberof Cluster
     */
    gpuNodePool?: ClusterNodePool | null;
    /**
     * 
     * @type {number}
     * @memberof Cluster
     */
    lastNodesReady?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Cluster
     */
    lastNodesTotal?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    region?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    zone?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Cluster
     */
    ips?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    hostname?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Cluster
     */
    integrationId?: number | null;
    /**
     * Legacy internal environment entity ID. Use envType.
     * @type {number}
     * @memberof Cluster
     * @deprecated
     */
    envId: number;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    envType: ClusterEnvTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    envScope: ClusterEnvScopeEnum;
    /**
     * Legacy internal environment entity IDs. Use allowedEnvTypes.
     * @type {Array<number>}
     * @memberof Cluster
     * @deprecated
     */
    allowedEnvIds: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Cluster
     */
    allowedEnvTypes: Array<ClusterAllowedEnvTypesEnum>;
    /**
     * 
     * @type {number}
     * @memberof Cluster
     */
    orgId: number;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    ownershipScope: ClusterOwnershipScopeEnum;
    /**
     * 
     * @type {number}
     * @memberof Cluster
     */
    ownerProjectId?: number | null;
    /**
     * True when every project in the organization can use the resource without a project share.
     * @type {boolean}
     * @memberof Cluster
     */
    availableToAllProjects: boolean;
    /**
     * 
     * @type {ClusterCapabilities}
     * @memberof Cluster
     */
    capabilities: ClusterCapabilities;
    /**
     * 
     * @type {ClusterSettings}
     * @memberof Cluster
     */
    settings?: ClusterSettings;
    /**
     * 
     * @type {Array<StorageClass>}
     * @memberof Cluster
     */
    storageClasses?: Array<StorageClass> | null;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    storageClassesObservedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Cluster
     */
    updatedAt: string;
}


/**
 * @export
 */
export const ClusterEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type ClusterEnvTypeEnum = typeof ClusterEnvTypeEnum[keyof typeof ClusterEnvTypeEnum];

/**
 * @export
 */
export const ClusterEnvScopeEnum = {
    All: 'all',
    Selected: 'selected'
} as const;
export type ClusterEnvScopeEnum = typeof ClusterEnvScopeEnum[keyof typeof ClusterEnvScopeEnum];

/**
 * @export
 */
export const ClusterAllowedEnvTypesEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type ClusterAllowedEnvTypesEnum = typeof ClusterAllowedEnvTypesEnum[keyof typeof ClusterAllowedEnvTypesEnum];

/**
 * @export
 */
export const ClusterOwnershipScopeEnum = {
    Org: 'org',
    Project: 'project'
} as const;
export type ClusterOwnershipScopeEnum = typeof ClusterOwnershipScopeEnum[keyof typeof ClusterOwnershipScopeEnum];

/**
 * 
 * @export
 * @interface ClusterAutoInfrastructureComponentSettings
 */
export interface ClusterAutoInfrastructureComponentSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ClusterAutoInfrastructureComponentSettings
     */
    enabled: boolean;
    /**
     * 
     * @type {ClusterAutoUpgradeVersionPolicy}
     * @memberof ClusterAutoInfrastructureComponentSettings
     */
    versionPolicy?: ClusterAutoUpgradeVersionPolicy;
    /**
     * 
     * @type {AutomationTimeWindow}
     * @memberof ClusterAutoInfrastructureComponentSettings
     */
    timeWindow?: AutomationTimeWindow;
}
/**
 * 
 * @export
 * @interface ClusterAutoInfrastructureComponentSettingsInput
 */
export interface ClusterAutoInfrastructureComponentSettingsInput {
    /**
     * 
     * @type {boolean}
     * @memberof ClusterAutoInfrastructureComponentSettingsInput
     */
    enabled?: boolean | null;
    /**
     * 
     * @type {ClusterAutoUpgradeVersionPolicyInput}
     * @memberof ClusterAutoInfrastructureComponentSettingsInput
     */
    versionPolicy?: ClusterAutoUpgradeVersionPolicyInput;
    /**
     * 
     * @type {AutomationTimeWindowInput}
     * @memberof ClusterAutoInfrastructureComponentSettingsInput
     */
    timeWindow?: AutomationTimeWindowInput;
}
/**
 * 
 * @export
 * @interface ClusterAutoInfrastructureUpgradeSettings
 */
export interface ClusterAutoInfrastructureUpgradeSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ClusterAutoInfrastructureUpgradeSettings
     */
    enabled: boolean;
    /**
     * 
     * @type {ClusterAutoInfrastructureComponentSettings}
     * @memberof ClusterAutoInfrastructureUpgradeSettings
     */
    infra?: ClusterAutoInfrastructureComponentSettings;
    /**
     * 
     * @type {ClusterAutoInfrastructureComponentSettings}
     * @memberof ClusterAutoInfrastructureUpgradeSettings
     */
    apps?: ClusterAutoInfrastructureComponentSettings;
}
/**
 * 
 * @export
 * @interface ClusterAutoInfrastructureUpgradeSettingsInput
 */
export interface ClusterAutoInfrastructureUpgradeSettingsInput {
    /**
     * 
     * @type {boolean}
     * @memberof ClusterAutoInfrastructureUpgradeSettingsInput
     */
    enabled: boolean;
    /**
     * 
     * @type {ClusterAutoInfrastructureComponentSettingsInput}
     * @memberof ClusterAutoInfrastructureUpgradeSettingsInput
     */
    infra?: ClusterAutoInfrastructureComponentSettingsInput;
    /**
     * 
     * @type {ClusterAutoInfrastructureComponentSettingsInput}
     * @memberof ClusterAutoInfrastructureUpgradeSettingsInput
     */
    apps?: ClusterAutoInfrastructureComponentSettingsInput;
}
/**
 * 
 * @export
 * @interface ClusterAutoUpgradeVersionPolicy
 */
export interface ClusterAutoUpgradeVersionPolicy {
    /**
     * Allow newer infrastructure app stack revisions that keep the same stable semantic version. Ignored for cluster-level infrastructure versions.
     * @type {boolean}
     * @memberof ClusterAutoUpgradeVersionPolicy
     */
    allowSameVersion: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClusterAutoUpgradeVersionPolicy
     */
    allowPatch: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClusterAutoUpgradeVersionPolicy
     */
    allowMinor: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClusterAutoUpgradeVersionPolicy
     */
    allowMajor: boolean;
}
/**
 * 
 * @export
 * @interface ClusterAutoUpgradeVersionPolicyInput
 */
export interface ClusterAutoUpgradeVersionPolicyInput {
    /**
     * Allow newer infrastructure app stack revisions that keep the same stable semantic version. Ignored for cluster-level infrastructure versions.
     * @type {boolean}
     * @memberof ClusterAutoUpgradeVersionPolicyInput
     */
    allowSameVersion?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClusterAutoUpgradeVersionPolicyInput
     */
    allowPatch?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClusterAutoUpgradeVersionPolicyInput
     */
    allowMinor?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClusterAutoUpgradeVersionPolicyInput
     */
    allowMajor?: boolean | null;
}
/**
 * 
 * @export
 * @interface ClusterCapabilities
 */
export interface ClusterCapabilities {
    /**
     * Whether this cluster uses Envoy Gateway for application routing.
     * @type {boolean}
     * @memberof ClusterCapabilities
     */
    envoyGateway: boolean;
    /**
     * Whether this cluster supports routes with the REDIRECT action.
     * @type {boolean}
     * @memberof ClusterCapabilities
     */
    redirectRoutes: boolean;
}
/**
 * 
 * @export
 * @interface ClusterCapabilityPolicy
 */
export interface ClusterCapabilityPolicy {
    /**
     * 
     * @type {boolean}
     * @memberof ClusterCapabilityPolicy
     */
    autoInstall: boolean;
    /**
     * Approved immutable stack revision IDs for discovery and optional installation.
     * @type {Set<number>}
     * @memberof ClusterCapabilityPolicy
     */
    stackRevisionIds: Set<number>;
}
/**
 * 
 * @export
 * @interface ClusterCreationResult
 */
export interface ClusterCreationResult {
    /**
     * 
     * @type {Cluster}
     * @memberof ClusterCreationResult
     */
    cluster: Cluster;
    /**
     * Task that provisions the cluster.
     * @type {number}
     * @memberof ClusterCreationResult
     */
    taskId?: number | null;
}
/**
 * Use envType and allowedEnvTypes. Legacy ID fields remain accepted but cannot be mixed with their type equivalents.
 * @export
 * @interface ClusterEnvironmentPolicyInput
 */
export interface ClusterEnvironmentPolicyInput {
    /**
     * 
     * @type {number}
     * @memberof ClusterEnvironmentPolicyInput
     * @deprecated
     */
    envId?: number;
    /**
     * 
     * @type {string}
     * @memberof ClusterEnvironmentPolicyInput
     */
    envType?: ClusterEnvironmentPolicyInputEnvTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ClusterEnvironmentPolicyInput
     */
    scope: ClusterEnvironmentPolicyInputScopeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof ClusterEnvironmentPolicyInput
     * @deprecated
     */
    allowedEnvIds?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ClusterEnvironmentPolicyInput
     */
    allowedEnvTypes?: Array<ClusterEnvironmentPolicyInputAllowedEnvTypesEnum>;
}


/**
 * @export
 */
export const ClusterEnvironmentPolicyInputEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type ClusterEnvironmentPolicyInputEnvTypeEnum = typeof ClusterEnvironmentPolicyInputEnvTypeEnum[keyof typeof ClusterEnvironmentPolicyInputEnvTypeEnum];

/**
 * @export
 */
export const ClusterEnvironmentPolicyInputScopeEnum = {
    All: 'all',
    Selected: 'selected'
} as const;
export type ClusterEnvironmentPolicyInputScopeEnum = typeof ClusterEnvironmentPolicyInputScopeEnum[keyof typeof ClusterEnvironmentPolicyInputScopeEnum];

/**
 * @export
 */
export const ClusterEnvironmentPolicyInputAllowedEnvTypesEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type ClusterEnvironmentPolicyInputAllowedEnvTypesEnum = typeof ClusterEnvironmentPolicyInputAllowedEnvTypesEnum[keyof typeof ClusterEnvironmentPolicyInputAllowedEnvTypesEnum];

/**
 * 
 * @export
 * @interface ClusterInfraAppUpgradeChangelog
 */
export interface ClusterInfraAppUpgradeChangelog {
    /**
     * 
     * @type {number}
     * @memberof ClusterInfraAppUpgradeChangelog
     */
    appInstanceId: number;
    /**
     * 
     * @type {string}
     * @memberof ClusterInfraAppUpgradeChangelog
     */
    appName: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterInfraAppUpgradeChangelog
     */
    appTitle: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterInfraAppUpgradeChangelog
     */
    previousStackVersion: string;
    /**
     * 
     * @type {string}
     * @memberof ClusterInfraAppUpgradeChangelog
     */
    stackVersion: string;
    /**
     * 
     * @type {number}
     * @memberof ClusterInfraAppUpgradeChangelog
     */
    previousStackRevNumber: number;
    /**
     * 
     * @type {number}
     * @memberof ClusterInfraAppUpgradeChangelog
     */
    stackRevNumber: number;
    /**
     * 
     * @type {Array<ServiceRevisionChange>}
     * @memberof ClusterInfraAppUpgradeChangelog
     */
    serviceChanges: Array<ServiceRevisionChange>;
}
/**
 * An optional node pool of the cluster, such as the GPU node pool.
 * @export
 * @interface ClusterNodePool
 */
export interface ClusterNodePool {
    /**
     * 
     * @type {string}
     * @memberof ClusterNodePool
     */
    machineType: string;
    /**
     * 
     * @type {number}
     * @memberof ClusterNodePool
     */
    minNodeCount: number;
    /**
     * 
     * @type {number}
     * @memberof ClusterNodePool
     */
    maxNodeCount: number;
    /**
     * 
     * @type {number}
     * @memberof ClusterNodePool
     */
    nodeDiskSize?: number | null;
}
/**
 * An optional GPU node pool. Only machine types that report GPUs are accepted, and the provider must support GPU node pools.
 * @export
 * @interface ClusterNodePoolInput
 */
export interface ClusterNodePoolInput {
    /**
     * 
     * @type {string}
     * @memberof ClusterNodePoolInput
     */
    machineType: string;
    /**
     * Zero lets the pool scale down to no nodes where the provider supports it.
     * @type {number}
     * @memberof ClusterNodePoolInput
     */
    minNodeCount: number;
    /**
     * 
     * @type {number}
     * @memberof ClusterNodePoolInput
     */
    maxNodeCount: number;
    /**
     * Node disk size in GB. Required when the provider's node disk size is configurable.
     * @type {number}
     * @memberof ClusterNodePoolInput
     */
    nodeDiskSize?: number | null;
}
/**
 * 
 * @export
 * @interface ClusterSettings
 */
export interface ClusterSettings {
    /**
     * 
     * @type {ClusterAutoInfrastructureUpgradeSettings}
     * @memberof ClusterSettings
     */
    autoInfrastructureUpgrade?: ClusterAutoInfrastructureUpgradeSettings;
    /**
     * 
     * @type {ClusterCapabilityPolicy}
     * @memberof ClusterSettings
     */
    clusterCapabilities?: ClusterCapabilityPolicy;
}
/**
 * 
 * @export
 * @interface ClusterSettingsInput
 */
export interface ClusterSettingsInput {
    /**
     * 
     * @type {ClusterAutoInfrastructureUpgradeSettingsInput}
     * @memberof ClusterSettingsInput
     */
    autoInfrastructureUpgrade?: ClusterAutoInfrastructureUpgradeSettingsInput;
    /**
     * 
     * @type {ClusterCapabilityPolicy}
     * @memberof ClusterSettingsInput
     */
    clusterCapabilities?: ClusterCapabilityPolicy;
}
/**
 * 
 * @export
 * @interface ConfigOverrideInput
 */
export interface ConfigOverrideInput {
    /**
     * 
     * @type {string}
     * @memberof ConfigOverrideInput
     */
    config?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigOverrideInput
     */
    disabled?: boolean | null;
}
/**
 * 
 * @export
 * @interface CopyStackSettingsInput
 */
export interface CopyStackSettingsInput {
    /**
     * 
     * @type {StackAutoServiceRevisionUpdateSettingsInput}
     * @memberof CopyStackSettingsInput
     */
    autoServiceRevisionUpdate?: StackAutoServiceRevisionUpdateSettingsInput;
    /**
     * 
     * @type {StackAutoOriginUpdateSettingsInput}
     * @memberof CopyStackSettingsInput
     */
    autoOriginStackUpdate?: StackAutoOriginUpdateSettingsInput;
}
/**
 * App service IDs to build.
 * @export
 * @interface CreateBuildRequest
 */
export interface CreateBuildRequest {
    /**
     * 
     * @type {Array<number>}
     * @memberof CreateBuildRequest
     */
    appServiceIds: Array<number>;
}
/**
 * 
 * @export
 * @interface CreateDeploymentRequest
 */
export interface CreateDeploymentRequest {
    /**
     * 
     * @type {Array<AppServiceDeploymentRequest>}
     * @memberof CreateDeploymentRequest
     */
    services: Array<AppServiceDeploymentRequest>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateDeploymentRequest
     */
    skipRollback?: boolean | null;
}
/**
 * 
 * @export
 * @interface CurrentUser
 */
export interface CurrentUser {
    /**
     * 
     * @type {number}
     * @memberof CurrentUser
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    name: string;
    /**
     * 
     * @type {Array<Org>}
     * @memberof CurrentUser
     */
    orgs?: Array<Org>;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    twofa: boolean;
    /**
     * 
     * @type {Org}
     * @memberof CurrentUser
     */
    defaultOrg?: Org | null;
    /**
     * 
     * @type {Array<Project>}
     * @memberof CurrentUser
     */
    defaultProjects?: Array<Project>;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface Database
 */
export interface Database {
    /**
     * 
     * @type {number}
     * @memberof Database
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    region?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    zone?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Database
     */
    integrationId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Database
     */
    appServiceId?: number | null;
    /**
     * org when the organization owns the resource, project when one project owns it.
     * @type {string}
     * @memberof Database
     */
    ownershipScope: DatabaseOwnershipScopeEnum;
    /**
     * 
     * @type {number}
     * @memberof Database
     */
    ownerProjectId?: number | null;
    /**
     * Legacy internal environment entity ID. Use envType.
     * @type {number}
     * @memberof Database
     * @deprecated
     */
    envId: number;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    envType: DatabaseEnvTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof Database
     */
    orgId: number;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Database
     */
    updatedAt: string;
}


/**
 * @export
 */
export const DatabaseOwnershipScopeEnum = {
    Org: 'org',
    Project: 'project'
} as const;
export type DatabaseOwnershipScopeEnum = typeof DatabaseOwnershipScopeEnum[keyof typeof DatabaseOwnershipScopeEnum];

/**
 * @export
 */
export const DatabaseEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type DatabaseEnvTypeEnum = typeof DatabaseEnvTypeEnum[keyof typeof DatabaseEnvTypeEnum];

/**
 * 
 * @export
 * @interface DatabaseCharset
 */
export interface DatabaseCharset {
    /**
     * 
     * @type {string}
     * @memberof DatabaseCharset
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseCharset
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseCharset
     */
    defaultCollation: string;
    /**
     * 
     * @type {boolean}
     * @memberof DatabaseCharset
     */
    _default: boolean;
}
/**
 * 
 * @export
 * @interface DatabaseDB
 */
export interface DatabaseDB {
    /**
     * 
     * @type {number}
     * @memberof DatabaseDB
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof DatabaseDB
     */
    databaseId?: number;
    /**
     * 
     * @type {string}
     * @memberof DatabaseDB
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseDB
     */
    collation: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseDB
     */
    charset: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseDB
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseDB
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseDB
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface DatabaseType
 */
export interface DatabaseType {
    /**
     * 
     * @type {string}
     * @memberof DatabaseType
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseType
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseType
     */
    kind: string;
}
/**
 * 
 * @export
 * @interface DatabaseUser
 */
export interface DatabaseUser {
    /**
     * 
     * @type {number}
     * @memberof DatabaseUser
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof DatabaseUser
     */
    databaseId?: number;
    /**
     * 
     * @type {string}
     * @memberof DatabaseUser
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof DatabaseUser
     */
    passwordSecretId: number;
    /**
     * 
     * @type {string}
     * @memberof DatabaseUser
     */
    hostname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatabaseUser
     */
    status: string;
    /**
     * 
     * @type {Array<DatabaseDB>}
     * @memberof DatabaseUser
     */
    dbs?: Array<DatabaseDB>;
    /**
     * 
     * @type {string}
     * @memberof DatabaseUser
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseUser
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface DatabaseVersion
 */
export interface DatabaseVersion {
    /**
     * 
     * @type {string}
     * @memberof DatabaseVersion
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseVersion
     */
    title: string;
}
/**
 * 
 * @export
 * @interface DeploymentFromCIInput
 */
export interface DeploymentFromCIInput {
    /**
     * 
     * @type {number}
     * @memberof DeploymentFromCIInput
     */
    appBuildId: number;
    /**
     * 
     * @type {Array<ServiceDeploymentInput>}
     * @memberof DeploymentFromCIInput
     */
    services: Array<ServiceDeploymentInput>;
    /**
     * 
     * @type {boolean}
     * @memberof DeploymentFromCIInput
     */
    skipPostDeployment: boolean;
}
/**
 * 
 * @export
 * @interface DockerRegistryCredentials
 */
export interface DockerRegistryCredentials {
    /**
     * 
     * @type {string}
     * @memberof DockerRegistryCredentials
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof DockerRegistryCredentials
     */
    password: string;
}
/**
 * 
 * @export
 * @interface DuplicateStackRequest
 */
export interface DuplicateStackRequest {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof DuplicateStackRequest
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof DuplicateStackRequest
     */
    projectId?: number | null;
    /**
     * Lets every project in the organization use the new resource without a project share. Only an organization-owned resource, created without projectId, can be available to all projects.
     * @type {boolean}
     * @memberof DuplicateStackRequest
     */
    availableToAllProjects?: boolean | null;
    /**
     * Optional immutable source stack revision to duplicate. It must belong to the stack in the request path.
     * @type {number}
     * @memberof DuplicateStackRequest
     */
    sourceRevId?: number | null;
    /**
     * 
     * @type {CopyStackSettingsInput}
     * @memberof DuplicateStackRequest
     */
    settings?: CopyStackSettingsInput;
}
/**
 * 
 * @export
 * @interface EffectiveAppRouteSetting
 */
export interface EffectiveAppRouteSetting {
    /**
     * 
     * @type {AppRouteSettingName}
     * @memberof EffectiveAppRouteSetting
     */
    name: AppRouteSettingName;
    /**
     * 
     * @type {string}
     * @memberof EffectiveAppRouteSetting
     */
    value: string;
    /**
     * 
     * @type {AppRouteSettingSource}
     * @memberof EffectiveAppRouteSetting
     */
    source: AppRouteSettingSource;
}


/**
 * 
 * @export
 * @interface FieldInput
 */
export interface FieldInput {
    /**
     * 
     * @type {string}
     * @memberof FieldInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FieldInput
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof FieldInput
     */
    envType?: FieldInputEnvTypeEnum | null;
}


/**
 * @export
 */
export const FieldInputEnvTypeEnum = {
    Dev: 'dev',
    Feature: 'feature',
    Test: 'test',
    Staging: 'staging',
    Prod: 'prod'
} as const;
export type FieldInputEnvTypeEnum = typeof FieldInputEnvTypeEnum[keyof typeof FieldInputEnvTypeEnum];

/**
 * 
 * @export
 * @interface GPUResources
 */
export interface GPUResources {
    /**
     * Qualified device-plugin resource name, such as nvidia.com/gpu or amd.com/gpu. Native and reserved Kubernetes resource names are rejected.
     * @type {string}
     * @memberof GPUResources
     */
    resourceName: string;
    /**
     * Device count per container replica. Kubernetes requests and limits are equal; zero explicitly disables GPUs.
     * @type {number}
     * @memberof GPUResources
     */
    count: number;
}
/**
 * 
 * @export
 * @interface GitAutoUpdateSettings
 */
export interface GitAutoUpdateSettings {
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettings
     */
    enabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettings
     */
    branches: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettings
     */
    semverTags: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettings
     */
    allowPatch: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettings
     */
    allowMinor: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettings
     */
    allowMajor: boolean;
}
/**
 * 
 * @export
 * @interface GitAutoUpdateSettingsInput
 */
export interface GitAutoUpdateSettingsInput {
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettingsInput
     */
    enabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettingsInput
     */
    branches: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettingsInput
     */
    semverTags: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettingsInput
     */
    allowPatch: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettingsInput
     */
    allowMinor: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GitAutoUpdateSettingsInput
     */
    allowMajor: boolean;
}
/**
 * 
 * @export
 * @interface GitRepoUsage
 */
export interface GitRepoUsage {
    /**
     * 
     * @type {number}
     * @memberof GitRepoUsage
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof GitRepoUsage
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof GitRepoUsage
     */
    title: string;
}
/**
 * 
 * @export
 * @interface GitRepoUsages
 */
export interface GitRepoUsages {
    /**
     * 
     * @type {Array<GitRepoUsage>}
     * @memberof GitRepoUsages
     */
    services: Array<GitRepoUsage>;
    /**
     * 
     * @type {Array<GitRepoUsage>}
     * @memberof GitRepoUsages
     */
    stacks: Array<GitRepoUsage>;
    /**
     * 
     * @type {Array<GitRepoUsage>}
     * @memberof GitRepoUsages
     */
    providers: Array<GitRepoUsage>;
}
/**
 * 
 * @export
 * @interface HelmChartAnalysis
 */
export interface HelmChartAnalysis {
    /**
     * 
     * @type {HelmChartMetadata}
     * @memberof HelmChartAnalysis
     */
    chart: HelmChartMetadata;
    /**
     * 
     * @type {string}
     * @memberof HelmChartAnalysis
     */
    release: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartAnalysis
     */
    namespace: string;
    /**
     * 
     * @type {number}
     * @memberof HelmChartAnalysis
     */
    resourceCount: number;
    /**
     * 
     * @type {Array<HelmChartWorkload>}
     * @memberof HelmChartAnalysis
     */
    workloads?: Array<HelmChartWorkload>;
    /**
     * 
     * @type {Array<HelmChartService>}
     * @memberof HelmChartAnalysis
     */
    services?: Array<HelmChartService>;
    /**
     * 
     * @type {Array<HelmChartVolumeClaim>}
     * @memberof HelmChartAnalysis
     */
    volumeClaims?: Array<HelmChartVolumeClaim>;
    /**
     * 
     * @type {Array<HelmChartResource>}
     * @memberof HelmChartAnalysis
     */
    crds?: Array<HelmChartResource>;
    /**
     * 
     * @type {Array<HelmChartResource>}
     * @memberof HelmChartAnalysis
     */
    clusterResources?: Array<HelmChartResource>;
    /**
     * 
     * @type {Array<HelmChartResource>}
     * @memberof HelmChartAnalysis
     */
    hooks?: Array<HelmChartResource>;
    /**
     * 
     * @type {Array<string>}
     * @memberof HelmChartAnalysis
     */
    unsupportedKinds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof HelmChartAnalysis
     */
    warnings?: Array<string>;
}
/**
 * 
 * @export
 * @interface HelmChartContainer
 */
export interface HelmChartContainer {
    /**
     * 
     * @type {string}
     * @memberof HelmChartContainer
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartContainer
     */
    image?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof HelmChartContainer
     */
    command?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof HelmChartContainer
     */
    args?: Array<string>;
    /**
     * 
     * @type {Array<HelmChartContainerPort>}
     * @memberof HelmChartContainer
     */
    ports?: Array<HelmChartContainerPort>;
    /**
     * 
     * @type {Array<string>}
     * @memberof HelmChartContainer
     */
    env?: Array<string>;
}
/**
 * 
 * @export
 * @interface HelmChartContainerPort
 */
export interface HelmChartContainerPort {
    /**
     * 
     * @type {string}
     * @memberof HelmChartContainerPort
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof HelmChartContainerPort
     */
    number: number;
    /**
     * 
     * @type {string}
     * @memberof HelmChartContainerPort
     */
    protocol: string;
}
/**
 * 
 * @export
 * @interface HelmChartInput
 */
export interface HelmChartInput {
    /**
     * Optional chart source name to use in generated Wodby manifests.
     * @type {string}
     * @memberof HelmChartInput
     */
    sourceName?: string;
    /**
     * Optional Helm repository or OCI source URL.
     * @type {string}
     * @memberof HelmChartInput
     */
    source?: string;
    /**
     * Helm chart reference, such as bitnami/redis, oci://registry.example.com/chart, a chart archive URL, or a server-local chart path.
     * @type {string}
     * @memberof HelmChartInput
     */
    chart: string;
    /**
     * Optional Helm chart version.
     * @type {string}
     * @memberof HelmChartInput
     */
    version?: string;
    /**
     * Optional Helm release name used for rendering analysis.
     * @type {string}
     * @memberof HelmChartInput
     */
    release?: string;
    /**
     * Optional Kubernetes namespace used for rendering analysis.
     * @type {string}
     * @memberof HelmChartInput
     */
    namespace?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof HelmChartInput
     */
    values?: { [key: string]: any; };
    /**
     * Optional Helm values YAML. Use either values or valuesYaml, not both.
     * @type {string}
     * @memberof HelmChartInput
     */
    valuesYaml?: string;
}
/**
 * 
 * @export
 * @interface HelmChartMetadata
 */
export interface HelmChartMetadata {
    /**
     * 
     * @type {string}
     * @memberof HelmChartMetadata
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartMetadata
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartMetadata
     */
    appVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartMetadata
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartMetadata
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartMetadata
     */
    chart: string;
}
/**
 * 
 * @export
 * @interface HelmChartResource
 */
export interface HelmChartResource {
    /**
     * 
     * @type {string}
     * @memberof HelmChartResource
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartResource
     */
    apiVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartResource
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartResource
     */
    namespace?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof HelmChartResource
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof HelmChartResource
     */
    annotations?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface HelmChartService
 */
export interface HelmChartService {
    /**
     * 
     * @type {string}
     * @memberof HelmChartService
     */
    name: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof HelmChartService
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof HelmChartService
     */
    selector?: { [key: string]: string; };
    /**
     * 
     * @type {Array<HelmChartServicePort>}
     * @memberof HelmChartService
     */
    ports?: Array<HelmChartServicePort>;
    /**
     * 
     * @type {boolean}
     * @memberof HelmChartService
     */
    headless: boolean;
}
/**
 * 
 * @export
 * @interface HelmChartServicePort
 */
export interface HelmChartServicePort {
    /**
     * 
     * @type {string}
     * @memberof HelmChartServicePort
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof HelmChartServicePort
     */
    number: number;
    /**
     * 
     * @type {HelmChartServicePortTargetPort}
     * @memberof HelmChartServicePort
     */
    targetPort?: HelmChartServicePortTargetPort;
    /**
     * 
     * @type {string}
     * @memberof HelmChartServicePort
     */
    protocol: string;
}
/**
 * @type HelmChartServicePortTargetPort
 * 
 * @export
 */
export type HelmChartServicePortTargetPort = number | string;
/**
 * 
 * @export
 * @interface HelmChartServiceScaffoldInput
 */
export interface HelmChartServiceScaffoldInput {
    /**
     * 
     * @type {HelmChartInput}
     * @memberof HelmChartServiceScaffoldInput
     */
    chart: HelmChartInput;
    /**
     * Optional generated Wodby service name.
     * @type {string}
     * @memberof HelmChartServiceScaffoldInput
     */
    serviceName?: string;
    /**
     * Optional generated Wodby service title.
     * @type {string}
     * @memberof HelmChartServiceScaffoldInput
     */
    serviceTitle?: string;
    /**
     * Optional generated Wodby service type. Defaults to service.
     * @type {string}
     * @memberof HelmChartServiceScaffoldInput
     */
    serviceType?: string;
    /**
     * Optional generated service icon.
     * @type {string}
     * @memberof HelmChartServiceScaffoldInput
     */
    icon?: string;
}
/**
 * 
 * @export
 * @interface HelmChartServiceScaffoldResponse
 */
export interface HelmChartServiceScaffoldResponse {
    /**
     * 
     * @type {HelmChartAnalysis}
     * @memberof HelmChartServiceScaffoldResponse
     */
    analysis: HelmChartAnalysis;
    /**
     * 
     * @type {string}
     * @memberof HelmChartServiceScaffoldResponse
     */
    manifestYaml: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof HelmChartServiceScaffoldResponse
     */
    manifest: { [key: string]: any; };
    /**
     * 
     * @type {Array<string>}
     * @memberof HelmChartServiceScaffoldResponse
     */
    warnings?: Array<string>;
}
/**
 * 
 * @export
 * @interface HelmChartStackScaffoldInput
 */
export interface HelmChartStackScaffoldInput {
    /**
     * 
     * @type {HelmChartInput}
     * @memberof HelmChartStackScaffoldInput
     */
    chart: HelmChartInput;
    /**
     * Optional generated Wodby service name.
     * @type {string}
     * @memberof HelmChartStackScaffoldInput
     */
    serviceName?: string;
    /**
     * Optional generated Wodby service title.
     * @type {string}
     * @memberof HelmChartStackScaffoldInput
     */
    serviceTitle?: string;
    /**
     * Optional generated Wodby service type. Defaults to service.
     * @type {string}
     * @memberof HelmChartStackScaffoldInput
     */
    serviceType?: string;
    /**
     * Optional generated Wodby stack name.
     * @type {string}
     * @memberof HelmChartStackScaffoldInput
     */
    stackName?: string;
    /**
     * Optional generated Wodby stack title.
     * @type {string}
     * @memberof HelmChartStackScaffoldInput
     */
    stackTitle?: string;
    /**
     * Optional generated service and stack icon.
     * @type {string}
     * @memberof HelmChartStackScaffoldInput
     */
    icon?: string;
}
/**
 * 
 * @export
 * @interface HelmChartStackScaffoldResponse
 */
export interface HelmChartStackScaffoldResponse {
    /**
     * 
     * @type {HelmChartAnalysis}
     * @memberof HelmChartStackScaffoldResponse
     */
    analysis: HelmChartAnalysis;
    /**
     * 
     * @type {string}
     * @memberof HelmChartStackScaffoldResponse
     */
    serviceManifestYaml: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof HelmChartStackScaffoldResponse
     */
    serviceManifest: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof HelmChartStackScaffoldResponse
     */
    stackManifestYaml: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof HelmChartStackScaffoldResponse
     */
    stackManifest: { [key: string]: any; };
    /**
     * 
     * @type {Array<string>}
     * @memberof HelmChartStackScaffoldResponse
     */
    warnings?: Array<string>;
}
/**
 * 
 * @export
 * @interface HelmChartVolumeClaim
 */
export interface HelmChartVolumeClaim {
    /**
     * 
     * @type {string}
     * @memberof HelmChartVolumeClaim
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartVolumeClaim
     */
    size?: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartVolumeClaim
     */
    storageClassName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof HelmChartVolumeClaim
     */
    accessModes?: Array<string>;
}
/**
 * 
 * @export
 * @interface HelmChartWorkload
 */
export interface HelmChartWorkload {
    /**
     * 
     * @type {string}
     * @memberof HelmChartWorkload
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof HelmChartWorkload
     */
    name: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof HelmChartWorkload
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof HelmChartWorkload
     */
    selector?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof HelmChartWorkload
     */
    podLabels?: { [key: string]: string; };
    /**
     * 
     * @type {Array<HelmChartContainer>}
     * @memberof HelmChartWorkload
     */
    containers?: Array<HelmChartContainer>;
    /**
     * 
     * @type {Array<HelmChartContainer>}
     * @memberof HelmChartWorkload
     */
    initContainers?: Array<HelmChartContainer>;
    /**
     * 
     * @type {Array<HelmChartVolumeClaim>}
     * @memberof HelmChartWorkload
     */
    volumes?: Array<HelmChartVolumeClaim>;
}
/**
 * 
 * @export
 * @interface IgnoreStackServiceRevisionInput
 */
export interface IgnoreStackServiceRevisionInput {
    /**
     * Root stack service whose update to skip. Its derivatives skip it too.
     * @type {number}
     * @memberof IgnoreStackServiceRevisionInput
     */
    stackServiceId: number;
    /**
     * Service revision to stop offering.
     * @type {number}
     * @memberof IgnoreStackServiceRevisionInput
     */
    serviceRevId: number;
}
/**
 * 
 * @export
 * @interface Import
 */
export interface Import {
    /**
     * 
     * @type {number}
     * @memberof Import
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Import
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Import
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof Import
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof Import
     */
    filename?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Import
     */
    size?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Import
     */
    appInstanceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Import
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Import
     */
    databaseId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Import
     */
    databaseDbId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Import
     */
    appServiceDeploymentId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Import
     */
    taskId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Import
     */
    backupId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Import
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Import
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof Import
     */
    startedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Import
     */
    endedAt?: string | null;
}
/**
 * 
 * @export
 * @interface ImportCatalogFromGitInput
 */
export interface ImportCatalogFromGitInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof ImportCatalogFromGitInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportCatalogFromGitInput
     */
    projectId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ImportCatalogFromGitInput
     */
    integrationId: number;
    /**
     * 
     * @type {string}
     * @memberof ImportCatalogFromGitInput
     */
    remoteGitRepoId: string;
    /**
     * 
     * @type {string}
     * @memberof ImportCatalogFromGitInput
     */
    gitRef: string;
    /**
     * 
     * @type {string}
     * @memberof ImportCatalogFromGitInput
     */
    gitRefType: string;
    /**
     * 
     * @type {GitAutoUpdateSettingsInput}
     * @memberof ImportCatalogFromGitInput
     */
    autoUpdate?: GitAutoUpdateSettingsInput;
}
/**
 * 
 * @export
 * @interface ImportFromInput
 */
export interface ImportFromInput {
    /**
     * 
     * @type {number}
     * @memberof ImportFromInput
     */
    databaseDbId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ImportFromInput
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ImportFromInput
     */
    backupName?: string | null;
}
/**
 * 
 * @export
 * @interface ImportInput
 */
export interface ImportInput {
    /**
     * 
     * @type {string}
     * @memberof ImportInput
     */
    importName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportInput
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof ImportInput
     */
    url?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ImportInput
     */
    backupId?: number | null;
    /**
     * 
     * @type {ImportFromInput}
     * @memberof ImportInput
     */
    from?: ImportFromInput;
}
/**
 * 
 * @export
 * @interface ImportServicesFromGitInput
 */
export interface ImportServicesFromGitInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof ImportServicesFromGitInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportServicesFromGitInput
     */
    projectId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ImportServicesFromGitInput
     */
    integrationId: number;
    /**
     * 
     * @type {string}
     * @memberof ImportServicesFromGitInput
     */
    remoteGitRepoId: string;
    /**
     * 
     * @type {string}
     * @memberof ImportServicesFromGitInput
     */
    gitRef: string;
    /**
     * 
     * @type {string}
     * @memberof ImportServicesFromGitInput
     */
    gitRefType: string;
    /**
     * 
     * @type {GitAutoUpdateSettingsInput}
     * @memberof ImportServicesFromGitInput
     */
    autoUpdate?: GitAutoUpdateSettingsInput;
    /**
     * Optional registry integration used when an imported service image requires authentication.
     * @type {number}
     * @memberof ImportServicesFromGitInput
     */
    registryIntegrationId?: number | null;
    /**
     * Lets every project in the organization use the imported services without a project share. Only organization-owned services, imported without projectId, can be available to all projects.
     * @type {boolean}
     * @memberof ImportServicesFromGitInput
     */
    availableToAllProjects?: boolean | null;
}
/**
 * 
 * @export
 * @interface ImportStacksFromGitInput
 */
export interface ImportStacksFromGitInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof ImportStacksFromGitInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStacksFromGitInput
     */
    projectId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ImportStacksFromGitInput
     */
    integrationId: number;
    /**
     * 
     * @type {string}
     * @memberof ImportStacksFromGitInput
     */
    remoteGitRepoId: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStacksFromGitInput
     */
    gitRef: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStacksFromGitInput
     */
    gitRefType: string;
    /**
     * 
     * @type {GitAutoUpdateSettingsInput}
     * @memberof ImportStacksFromGitInput
     */
    autoUpdate?: GitAutoUpdateSettingsInput;
    /**
     * Lets every project in the organization use the imported stacks without a project share. Only organization-owned stacks, imported without projectId, can be available to all projects.
     * @type {boolean}
     * @memberof ImportStacksFromGitInput
     */
    availableToAllProjects?: boolean | null;
}
/**
 * 
 * @export
 * @interface Integration
 */
export interface Integration {
    /**
     * 
     * @type {number}
     * @memberof Integration
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Integration
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Integration
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof Integration
     */
    scope?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Integration
     */
    auth?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Integration
     */
    outdated: boolean;
    /**
     * 
     * @type {number}
     * @memberof Integration
     */
    providerRevId: number;
    /**
     * 
     * @type {number}
     * @memberof Integration
     */
    orgId: number;
    /**
     * Legacy internal environment entity ID. Use primaryEnvType.
     * @type {number}
     * @memberof Integration
     * @deprecated
     */
    primaryEnvId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Integration
     */
    primaryEnvType?: IntegrationPrimaryEnvTypeEnum | null;
    /**
     * 
     * @type {string}
     * @memberof Integration
     */
    envScope: IntegrationEnvScopeEnum;
    /**
     * Legacy internal environment entity IDs. Use allowedEnvTypes.
     * @type {Array<number>}
     * @memberof Integration
     * @deprecated
     */
    allowedEnvIds: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Integration
     */
    allowedEnvTypes: Array<IntegrationAllowedEnvTypesEnum>;
    /**
     * org when the organization owns the resource, project when one project owns it.
     * @type {string}
     * @memberof Integration
     */
    ownershipScope: IntegrationOwnershipScopeEnum;
    /**
     * 
     * @type {number}
     * @memberof Integration
     */
    ownerProjectId?: number | null;
    /**
     * True when every project in the organization can use the resource without a project share.
     * @type {boolean}
     * @memberof Integration
     */
    availableToAllProjects: boolean;
    /**
     * 
     * @type {string}
     * @memberof Integration
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Integration
     */
    updatedAt: string;
}


/**
 * @export
 */
export const IntegrationPrimaryEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type IntegrationPrimaryEnvTypeEnum = typeof IntegrationPrimaryEnvTypeEnum[keyof typeof IntegrationPrimaryEnvTypeEnum];

/**
 * @export
 */
export const IntegrationEnvScopeEnum = {
    All: 'all',
    Selected: 'selected'
} as const;
export type IntegrationEnvScopeEnum = typeof IntegrationEnvScopeEnum[keyof typeof IntegrationEnvScopeEnum];

/**
 * @export
 */
export const IntegrationAllowedEnvTypesEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type IntegrationAllowedEnvTypesEnum = typeof IntegrationAllowedEnvTypesEnum[keyof typeof IntegrationAllowedEnvTypesEnum];

/**
 * @export
 */
export const IntegrationOwnershipScopeEnum = {
    Org: 'org',
    Project: 'project'
} as const;
export type IntegrationOwnershipScopeEnum = typeof IntegrationOwnershipScopeEnum[keyof typeof IntegrationOwnershipScopeEnum];

/**
 * 
 * @export
 * @interface IntegrationConfigurationResult
 */
export interface IntegrationConfigurationResult {
    /**
     * 
     * @type {Integration}
     * @memberof IntegrationConfigurationResult
     */
    integration: Integration;
    /**
     * 
     * @type {number}
     * @memberof IntegrationConfigurationResult
     */
    taskId?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof IntegrationConfigurationResult
     */
    warnings: Array<string>;
}
/**
 * Use primaryEnvType and allowedEnvTypes. Legacy ID fields remain accepted but cannot be mixed with their type equivalents.
 * @export
 * @interface IntegrationEnvironmentPolicyInput
 */
export interface IntegrationEnvironmentPolicyInput {
    /**
     * 
     * @type {number}
     * @memberof IntegrationEnvironmentPolicyInput
     * @deprecated
     */
    primaryEnvId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof IntegrationEnvironmentPolicyInput
     */
    primaryEnvType?: IntegrationEnvironmentPolicyInputPrimaryEnvTypeEnum | null;
    /**
     * 
     * @type {string}
     * @memberof IntegrationEnvironmentPolicyInput
     */
    scope: IntegrationEnvironmentPolicyInputScopeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof IntegrationEnvironmentPolicyInput
     * @deprecated
     */
    allowedEnvIds?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof IntegrationEnvironmentPolicyInput
     */
    allowedEnvTypes?: Array<IntegrationEnvironmentPolicyInputAllowedEnvTypesEnum>;
}


/**
 * @export
 */
export const IntegrationEnvironmentPolicyInputPrimaryEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type IntegrationEnvironmentPolicyInputPrimaryEnvTypeEnum = typeof IntegrationEnvironmentPolicyInputPrimaryEnvTypeEnum[keyof typeof IntegrationEnvironmentPolicyInputPrimaryEnvTypeEnum];

/**
 * @export
 */
export const IntegrationEnvironmentPolicyInputScopeEnum = {
    All: 'all',
    Selected: 'selected'
} as const;
export type IntegrationEnvironmentPolicyInputScopeEnum = typeof IntegrationEnvironmentPolicyInputScopeEnum[keyof typeof IntegrationEnvironmentPolicyInputScopeEnum];

/**
 * @export
 */
export const IntegrationEnvironmentPolicyInputAllowedEnvTypesEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type IntegrationEnvironmentPolicyInputAllowedEnvTypesEnum = typeof IntegrationEnvironmentPolicyInputAllowedEnvTypesEnum[keyof typeof IntegrationEnvironmentPolicyInputAllowedEnvTypesEnum];

/**
 * 
 * @export
 * @interface IntegrationLinkInput
 */
export interface IntegrationLinkInput {
    /**
     * 
     * @type {string}
     * @memberof IntegrationLinkInput
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof IntegrationLinkInput
     */
    integrationId: number;
}
/**
 * 
 * @export
 * @interface IntegrationProviderRevisionUpgrade
 */
export interface IntegrationProviderRevisionUpgrade {
    /**
     * 
     * @type {string}
     * @memberof IntegrationProviderRevisionUpgrade
     */
    state: IntegrationProviderRevisionUpgradeStateEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof IntegrationProviderRevisionUpgrade
     */
    reasons: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof IntegrationProviderRevisionUpgrade
     */
    removedFields: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof IntegrationProviderRevisionUpgrade
     */
    canDropRemovedFields: boolean;
    /**
     * 
     * @type {ProviderRevision}
     * @memberof IntegrationProviderRevisionUpgrade
     */
    currentRevision: ProviderRevision;
    /**
     * 
     * @type {ProviderRevision}
     * @memberof IntegrationProviderRevisionUpgrade
     */
    targetRevision: ProviderRevision;
}


/**
 * @export
 */
export const IntegrationProviderRevisionUpgradeStateEnum = {
    Current: 'current',
    Safe: 'safe',
    Blocked: 'blocked',
    MigrationRequired: 'migration_required',
    Error: 'error'
} as const;
export type IntegrationProviderRevisionUpgradeStateEnum = typeof IntegrationProviderRevisionUpgradeStateEnum[keyof typeof IntegrationProviderRevisionUpgradeStateEnum];

/**
 * 
 * @export
 * @interface IntegrationScope
 */
export interface IntegrationScope {
    /**
     * 
     * @type {string}
     * @memberof IntegrationScope
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationScope
     */
    title: string;
}
/**
 * 
 * @export
 * @interface IntegrationUsage
 */
export interface IntegrationUsage {
    /**
     * 
     * @type {string}
     * @memberof IntegrationUsage
     */
    id: string;
    /**
     * current for what uses the integration now, historical for records such as builds and backups, cleanup for pending removal of resources it created.
     * @type {string}
     * @memberof IntegrationUsage
     */
    category: IntegrationUsageCategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof IntegrationUsage
     */
    kind: IntegrationUsageKindEnum;
    /**
     * 
     * @type {string}
     * @memberof IntegrationUsage
     */
    detail?: string | null;
    /**
     * 
     * @type {IntegrationUsageTarget}
     * @memberof IntegrationUsage
     */
    target: IntegrationUsageTarget;
    /**
     * 
     * @type {string}
     * @memberof IntegrationUsage
     */
    createdAt: string;
}


/**
 * @export
 */
export const IntegrationUsageCategoryEnum = {
    Current: 'current',
    Historical: 'historical',
    Cleanup: 'cleanup'
} as const;
export type IntegrationUsageCategoryEnum = typeof IntegrationUsageCategoryEnum[keyof typeof IntegrationUsageCategoryEnum];

/**
 * @export
 */
export const IntegrationUsageKindEnum = {
    ApplicationAccess: 'application_access',
    ApplicationAccessCleanup: 'application_access_cleanup',
    AppServiceIntegration: 'app_service_integration',
    AppServiceCi: 'app_service_ci',
    StackServiceIntegration: 'stack_service_integration',
    StackServiceBuildSource: 'stack_service_build_source',
    ServiceRegistry: 'service_registry',
    OrganizationCi: 'organization_ci',
    OrganizationRegistry: 'organization_registry',
    AppEnvironmentCi: 'app_environment_ci',
    AppEnvironmentRegistry: 'app_environment_registry',
    BackupStorage: 'backup_storage',
    AppBuildCi: 'app_build_ci',
    AppBuildRegistry: 'app_build_registry',
    GitRepository: 'git_repository',
    ClusterProvider: 'cluster_provider',
    DatabaseProvider: 'database_provider',
    BackupPresetStorage: 'backup_preset_storage'
} as const;
export type IntegrationUsageKindEnum = typeof IntegrationUsageKindEnum[keyof typeof IntegrationUsageKindEnum];

/**
 * 
 * @export
 * @interface IntegrationUsageTarget
 */
export interface IntegrationUsageTarget {
    /**
     * 
     * @type {number}
     * @memberof IntegrationUsageTarget
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof IntegrationUsageTarget
     */
    type: IntegrationUsageTargetTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof IntegrationUsageTarget
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IntegrationUsageTarget
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationUsageTarget
     */
    icon?: string | null;
    /**
     * Resource that contains the target, such as the app environment of an app service.
     * @type {IntegrationUsageTarget}
     * @memberof IntegrationUsageTarget
     */
    parent?: IntegrationUsageTarget;
}


/**
 * @export
 */
export const IntegrationUsageTargetTypeEnum = {
    Organization: 'organization',
    App: 'app',
    AppEnvironment: 'app_environment',
    AppService: 'app_service',
    Stack: 'stack',
    StackService: 'stack_service',
    Service: 'service',
    Backup: 'backup',
    AppBuild: 'app_build',
    GitRepository: 'git_repository',
    Cluster: 'cluster',
    Database: 'database',
    BackupPreset: 'backup_preset',
    AccessCleanup: 'access_cleanup'
} as const;
export type IntegrationUsageTargetTypeEnum = typeof IntegrationUsageTargetTypeEnum[keyof typeof IntegrationUsageTargetTypeEnum];

/**
 * 
 * @export
 * @interface IntegrationUsagesResponse
 */
export interface IntegrationUsagesResponse {
    /**
     * 
     * @type {Array<IntegrationUsage>}
     * @memberof IntegrationUsagesResponse
     */
    items: Array<IntegrationUsage>;
    /**
     * 
     * @type {number}
     * @memberof IntegrationUsagesResponse
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof IntegrationUsagesResponse
     */
    nextPage?: number | null;
}
/**
 * 
 * @export
 * @interface IntegrationVariableRequirement
 */
export interface IntegrationVariableRequirement {
    /**
     * 
     * @type {string}
     * @memberof IntegrationVariableRequirement
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof IntegrationVariableRequirement
     */
    secret: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IntegrationVariableRequirement
     */
    optional: boolean;
}
/**
 * 
 * @export
 * @interface IntegrationVariableRequirementInput
 */
export interface IntegrationVariableRequirementInput {
    /**
     * 
     * @type {string}
     * @memberof IntegrationVariableRequirementInput
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof IntegrationVariableRequirementInput
     */
    secret?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IntegrationVariableRequirementInput
     */
    optional?: boolean;
}
/**
 * 
 * @export
 * @interface InviteOrgMemberInput
 */
export interface InviteOrgMemberInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof InviteOrgMemberInput
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof InviteOrgMemberInput
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof InviteOrgMemberInput
     */
    role: InviteOrgMemberInputRoleEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof InviteOrgMemberInput
     */
    teamIds?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof InviteOrgMemberInput
     */
    projectIds?: Array<number>;
}


/**
 * @export
 */
export const InviteOrgMemberInputRoleEnum = {
    Member: 'member',
    Admin: 'admin',
    Owner: 'owner'
} as const;
export type InviteOrgMemberInputRoleEnum = typeof InviteOrgMemberInputRoleEnum[keyof typeof InviteOrgMemberInputRoleEnum];

/**
 * 
 * @export
 * @interface K3SInstallCommand
 */
export interface K3SInstallCommand {
    /**
     * 
     * @type {string}
     * @memberof K3SInstallCommand
     */
    command: string;
}
/**
 * 
 * @export
 * @interface KubeVersion
 */
export interface KubeVersion {
    /**
     * 
     * @type {string}
     * @memberof KubeVersion
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof KubeVersion
     */
    title: string;
}
/**
 * 
 * @export
 * @interface KubernetesVersionUpgradePlan
 */
export interface KubernetesVersionUpgradePlan {
    /**
     * 
     * @type {string}
     * @memberof KubernetesVersionUpgradePlan
     */
    currentVersion: string;
    /**
     * 
     * @type {string}
     * @memberof KubernetesVersionUpgradePlan
     */
    providerVersion: string;
    /**
     * 
     * @type {string}
     * @memberof KubernetesVersionUpgradePlan
     */
    provider: string;
    /**
     * 
     * @type {boolean}
     * @memberof KubernetesVersionUpgradePlan
     */
    supported: boolean;
    /**
     * 
     * @type {Array<KubernetesVersionUpgradeTarget>}
     * @memberof KubernetesVersionUpgradePlan
     */
    targets: Array<KubernetesVersionUpgradeTarget>;
    /**
     * 
     * @type {Array<string>}
     * @memberof KubernetesVersionUpgradePlan
     */
    blockers: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof KubernetesVersionUpgradePlan
     */
    warnings: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof KubernetesVersionUpgradePlan
     */
    observedAt: string;
}
/**
 * 
 * @export
 * @interface KubernetesVersionUpgradeTarget
 */
export interface KubernetesVersionUpgradeTarget {
    /**
     * 
     * @type {string}
     * @memberof KubernetesVersionUpgradeTarget
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof KubernetesVersionUpgradeTarget
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof KubernetesVersionUpgradeTarget
     */
    kind: KubernetesVersionUpgradeTargetKindEnum;
    /**
     * 
     * @type {boolean}
     * @memberof KubernetesVersionUpgradeTarget
     */
    preview: boolean;
}


/**
 * @export
 */
export const KubernetesVersionUpgradeTargetKindEnum = {
    Patch: 'patch',
    Minor: 'minor'
} as const;
export type KubernetesVersionUpgradeTargetKindEnum = typeof KubernetesVersionUpgradeTargetKindEnum[keyof typeof KubernetesVersionUpgradeTargetKindEnum];

/**
 * 
 * @export
 * @interface LogLine
 */
export interface LogLine {
    /**
     * 
     * @type {number}
     * @memberof LogLine
     */
    sequenceId: number;
    /**
     * 
     * @type {string}
     * @memberof LogLine
     */
    level: string;
    /**
     * 
     * @type {string}
     * @memberof LogLine
     */
    message: string;
}
/**
 * 
 * @export
 * @interface LogStream
 */
export interface LogStream {
    /**
     * 
     * @type {number}
     * @memberof LogStream
     */
    id: number;
}
/**
 * 
 * @export
 * @interface ManifestFromYAMLInput
 */
export interface ManifestFromYAMLInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof ManifestFromYAMLInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof ManifestFromYAMLInput
     */
    projectId?: number | null;
    /**
     * Lets every project in the organization use the new resource without a project share. Only an organization-owned resource, created without projectId, can be available to all projects.
     * @type {boolean}
     * @memberof ManifestFromYAMLInput
     */
    availableToAllProjects?: boolean | null;
    /**
     * Optional revision version label for the generated non-Git resource.
     * @type {string}
     * @memberof ManifestFromYAMLInput
     */
    version?: string;
    /**
     * Complete Wodby service.yml or stack.yml manifest content.
     * @type {string}
     * @memberof ManifestFromYAMLInput
     */
    manifestYaml: string;
    /**
     * Optional referenced file contents keyed by manifest-relative path, for example Dockerfile or configs/app.conf.
     * @type {{ [key: string]: string; }}
     * @memberof ManifestFromYAMLInput
     */
    files?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface ManifestValidationResponse
 */
export interface ManifestValidationResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ManifestValidationResponse
     */
    valid: boolean;
    /**
     * 
     * @type {string}
     * @memberof ManifestValidationResponse
     */
    error?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ManifestValidationResponse
     */
    resource?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ManifestValidationResponse
     */
    manifest?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface NamedSecretValueInput
 */
export interface NamedSecretValueInput {
    /**
     * 
     * @type {string}
     * @memberof NamedSecretValueInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NamedSecretValueInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof NamedSecretValueInput
     */
    secret: boolean;
}
/**
 * 
 * @export
 * @interface NewAnnotationInput
 */
export interface NewAnnotationInput {
    /**
     * 
     * @type {string}
     * @memberof NewAnnotationInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewAnnotationInput
     */
    value: string;
}
/**
 * 
 * @export
 * @interface NewAppAccessInput
 */
export interface NewAppAccessInput {
    /**
     * 
     * @type {number}
     * @memberof NewAppAccessInput
     */
    integrationId: number;
    /**
     * 
     * @type {string}
     * @memberof NewAppAccessInput
     */
    mode: NewAppAccessInputModeEnum;
    /**
     * 
     * @type {string}
     * @memberof NewAppAccessInput
     */
    scope: NewAppAccessInputScopeEnum;
    /**
     * 
     * @type {Array<AppAccessSettingInput>}
     * @memberof NewAppAccessInput
     */
    settings?: Array<AppAccessSettingInput>;
    /**
     * 
     * @type {Array<AppAccessEndpointInput>}
     * @memberof NewAppAccessInput
     */
    endpoints: Array<AppAccessEndpointInput>;
}


/**
 * @export
 */
export const NewAppAccessInputModeEnum = {
    Protected: 'PROTECTED',
    PrivateNetwork: 'PRIVATE_NETWORK'
} as const;
export type NewAppAccessInputModeEnum = typeof NewAppAccessInputModeEnum[keyof typeof NewAppAccessInputModeEnum];

/**
 * @export
 */
export const NewAppAccessInputScopeEnum = {
    EntireApp: 'ENTIRE_APP',
    SelectedEndpoints: 'SELECTED_ENDPOINTS'
} as const;
export type NewAppAccessInputScopeEnum = typeof NewAppAccessInputScopeEnum[keyof typeof NewAppAccessInputScopeEnum];

/**
 * 
 * @export
 * @interface NewAppAnnotationInput
 */
export interface NewAppAnnotationInput {
    /**
     * 
     * @type {number}
     * @memberof NewAppAnnotationInput
     */
    appEnvironmentId: number;
    /**
     * Limit the annotation to one service's ingress.
     * @type {number}
     * @memberof NewAppAnnotationInput
     */
    appServiceId?: number | null;
    /**
     * Limit the annotation to one route's ingress.
     * @type {number}
     * @memberof NewAppAnnotationInput
     */
    appRouteId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppAnnotationInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewAppAnnotationInput
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof NewAppAnnotationInput
     */
    type: NewAppAnnotationInputTypeEnum;
}


/**
 * @export
 */
export const NewAppAnnotationInputTypeEnum = {
    Ingress: 'ingress'
} as const;
export type NewAppAnnotationInputTypeEnum = typeof NewAppAnnotationInputTypeEnum[keyof typeof NewAppAnnotationInputTypeEnum];

/**
 * 
 * @export
 * @interface NewAppAuthInput
 */
export interface NewAppAuthInput {
    /**
     * 
     * @type {number}
     * @memberof NewAppAuthInput
     */
    appInstanceId: number;
    /**
     * App services to protect. Omit or pass an empty list to protect the whole app environment.
     * @type {Array<number>}
     * @memberof NewAppAuthInput
     */
    appServiceIds?: Array<number> | null;
    /**
     * Single-service scope. Ignored when appServiceIds is supplied.
     * @type {number}
     * @memberof NewAppAuthInput
     * @deprecated
     */
    appServiceId?: number | null;
    /**
     * Route scope. The owning app service is derived from the route.
     * @type {number}
     * @memberof NewAppAuthInput
     */
    appRouteId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppAuthInput
     */
    login: string;
    /**
     * 
     * @type {string}
     * @memberof NewAppAuthInput
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof NewAppAuthInput
     */
    realm: string;
}
/**
 * 
 * @export
 * @interface NewAppEnvironmentAccessEndpointInput
 */
export interface NewAppEnvironmentAccessEndpointInput {
    /**
     * Machine name of an enabled app service from the selected stack revision.
     * @type {string}
     * @memberof NewAppEnvironmentAccessEndpointInput
     */
    appServiceName: string;
    /**
     * Machine name of a public HTTP port from that service manifest.
     * @type {string}
     * @memberof NewAppEnvironmentAccessEndpointInput
     */
    appPortName: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewAppEnvironmentAccessEndpointInput
     */
    primary: boolean;
}
/**
 * 
 * @export
 * @interface NewAppEnvironmentAccessInput
 */
export interface NewAppEnvironmentAccessInput {
    /**
     * 
     * @type {number}
     * @memberof NewAppEnvironmentAccessInput
     */
    integrationId: number;
    /**
     * 
     * @type {string}
     * @memberof NewAppEnvironmentAccessInput
     */
    mode: NewAppEnvironmentAccessInputModeEnum;
    /**
     * 
     * @type {string}
     * @memberof NewAppEnvironmentAccessInput
     */
    scope: NewAppEnvironmentAccessInputScopeEnum;
    /**
     * 
     * @type {Array<AppAccessSettingInput>}
     * @memberof NewAppEnvironmentAccessInput
     */
    settings?: Array<AppAccessSettingInput>;
    /**
     * Required only when the selected provider uses a customer-assigned hostname.
     * @type {string}
     * @memberof NewAppEnvironmentAccessInput
     */
    host?: string | null;
    /**
     * HTTP endpoints selected during creation. Used only with SELECTED_ENDPOINTS scope; older clients may omit it to select the main endpoint.
     * @type {Array<NewAppEnvironmentAccessEndpointInput>}
     * @memberof NewAppEnvironmentAccessInput
     */
    endpoints?: Array<NewAppEnvironmentAccessEndpointInput>;
}


/**
 * @export
 */
export const NewAppEnvironmentAccessInputModeEnum = {
    Protected: 'PROTECTED',
    PrivateNetwork: 'PRIVATE_NETWORK'
} as const;
export type NewAppEnvironmentAccessInputModeEnum = typeof NewAppEnvironmentAccessInputModeEnum[keyof typeof NewAppEnvironmentAccessInputModeEnum];

/**
 * @export
 */
export const NewAppEnvironmentAccessInputScopeEnum = {
    EntireApp: 'ENTIRE_APP',
    SelectedEndpoints: 'SELECTED_ENDPOINTS'
} as const;
export type NewAppEnvironmentAccessInputScopeEnum = typeof NewAppEnvironmentAccessInputScopeEnum[keyof typeof NewAppEnvironmentAccessInputScopeEnum];

/**
 * 
 * @export
 * @interface NewAppEnvironmentInput
 */
export interface NewAppEnvironmentInput {
    /**
     * 
     * @type {string}
     * @memberof NewAppEnvironmentInput
     */
    executionMode?: NewAppEnvironmentInputExecutionModeEnum;
    /**
     * 
     * @type {NewWorkspaceInput}
     * @memberof NewAppEnvironmentInput
     */
    workspace?: NewWorkspaceInput;
    /**
     * 
     * @type {number}
     * @memberof NewAppEnvironmentInput
     */
    appId: number;
    /**
     * 
     * @type {string}
     * @memberof NewAppEnvironmentInput
     */
    environmentName: string;
    /**
     * Defaults to environmentName when omitted.
     * @type {string}
     * @memberof NewAppEnvironmentInput
     */
    environmentTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof NewAppEnvironmentInput
     */
    environmentType: NewAppEnvironmentInputEnvironmentTypeEnum;
    /**
     * Defaults to environmentName.appName.orgDomain when omitted.
     * @type {string}
     * @memberof NewAppEnvironmentInput
     */
    domain?: string;
    /**
     * 
     * @type {number}
     * @memberof NewAppEnvironmentInput
     */
    stackRevId: number;
    /**
     * Defaults to the stack revision's service defaults when omitted.
     * @type {Array<NewAppServiceInput>}
     * @memberof NewAppEnvironmentInput
     */
    services?: Array<NewAppServiceInput>;
    /**
     * Changes to the stack revision's service defaults. Use it instead of services to set only what differs, such as the repository of a workspace. Not allowed with services.
     * @type {Array<NewAppServiceOverrideInput>}
     * @memberof NewAppEnvironmentInput
     */
    serviceOverrides?: Array<NewAppServiceOverrideInput>;
    /**
     * 
     * @type {number}
     * @memberof NewAppEnvironmentInput
     */
    clusterId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewAppEnvironmentInput
     */
    ciIntegrationId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewAppEnvironmentInput
     */
    registryIntegrationId?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewAppEnvironmentInput
     */
    deferInitialDeployment?: boolean;
    /**
     * 
     * @type {AppEnvironmentSettingsInput}
     * @memberof NewAppEnvironmentInput
     */
    settings?: AppEnvironmentSettingsInput;
    /**
     * 
     * @type {NewAppEnvironmentAccessInput}
     * @memberof NewAppEnvironmentInput
     */
    access?: NewAppEnvironmentAccessInput;
}


/**
 * @export
 */
export const NewAppEnvironmentInputExecutionModeEnum = {
    Standard: 'standard',
    Workspace: 'workspace'
} as const;
export type NewAppEnvironmentInputExecutionModeEnum = typeof NewAppEnvironmentInputExecutionModeEnum[keyof typeof NewAppEnvironmentInputExecutionModeEnum];

/**
 * @export
 */
export const NewAppEnvironmentInputEnvironmentTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type NewAppEnvironmentInputEnvironmentTypeEnum = typeof NewAppEnvironmentInputEnvironmentTypeEnum[keyof typeof NewAppEnvironmentInputEnvironmentTypeEnum];

/**
 * 
 * @export
 * @interface NewAppInput
 */
export interface NewAppInput {
    /**
     * 
     * @type {string}
     * @memberof NewAppInput
     */
    executionMode?: NewAppInputExecutionModeEnum;
    /**
     * 
     * @type {NewWorkspaceInput}
     * @memberof NewAppInput
     */
    workspace?: NewWorkspaceInput;
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof NewAppInput
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof NewAppInput
     */
    name: string;
    /**
     * Defaults to name when omitted.
     * @type {string}
     * @memberof NewAppInput
     */
    title?: string;
    /**
     * Required for the canonical app environment contract.
     * @type {string}
     * @memberof NewAppInput
     */
    environmentName: string;
    /**
     * Defaults to environmentName when omitted.
     * @type {string}
     * @memberof NewAppInput
     */
    environmentTitle?: string;
    /**
     * Required for the canonical app environment contract.
     * @type {string}
     * @memberof NewAppInput
     */
    environmentType: NewAppInputEnvironmentTypeEnum;
    /**
     * Defaults to environmentName.name.orgDomain.
     * @type {string}
     * @memberof NewAppInput
     */
    domain?: string;
    /**
     * 
     * @type {number}
     * @memberof NewAppInput
     */
    projectId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewAppInput
     */
    stackRevId: number;
    /**
     * Defaults to the stack revision's service defaults when omitted.
     * @type {Array<NewAppServiceInput>}
     * @memberof NewAppInput
     */
    services?: Array<NewAppServiceInput>;
    /**
     * Changes to the stack revision's service defaults. Use it instead of services to set only what differs, such as the repository of a workspace. Not allowed with services.
     * @type {Array<NewAppServiceOverrideInput>}
     * @memberof NewAppInput
     */
    serviceOverrides?: Array<NewAppServiceOverrideInput>;
    /**
     * 
     * @type {number}
     * @memberof NewAppInput
     */
    clusterId?: number | null;
    /**
     * Omit or use null to inherit the organization default, use 0 for the built-in CI service, or use an accessible CI integration ID. A project-owned integration must be shared with the app's project.
     * @type {number}
     * @memberof NewAppInput
     */
    ciIntegrationId?: number | null;
    /**
     * Omit or use null to inherit the organization default, use 0 for the built-in registry, or use an accessible registry integration ID. A project-owned integration must be shared with the app's project.
     * @type {number}
     * @memberof NewAppInput
     */
    registryIntegrationId?: number | null;
    /**
     * Defers the automatic initial build and deployment while preserving app environment initialization. Intended for automation that configures the environment before explicitly starting its first build.
     * @type {boolean}
     * @memberof NewAppInput
     */
    deferInitialDeployment?: boolean;
    /**
     * 
     * @type {AppEnvironmentSettingsInput}
     * @memberof NewAppInput
     */
    settings?: AppEnvironmentSettingsInput;
    /**
     * 
     * @type {NewAppEnvironmentAccessInput}
     * @memberof NewAppInput
     */
    access?: NewAppEnvironmentAccessInput;
}


/**
 * @export
 */
export const NewAppInputExecutionModeEnum = {
    Standard: 'standard',
    Workspace: 'workspace'
} as const;
export type NewAppInputExecutionModeEnum = typeof NewAppInputExecutionModeEnum[keyof typeof NewAppInputExecutionModeEnum];

/**
 * @export
 */
export const NewAppInputEnvironmentTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type NewAppInputEnvironmentTypeEnum = typeof NewAppInputEnvironmentTypeEnum[keyof typeof NewAppInputEnvironmentTypeEnum];

/**
 * 
 * @export
 * @interface NewAppRouteInput
 */
export interface NewAppRouteInput {
    /**
     * 
     * @type {number}
     * @memberof NewAppRouteInput
     */
    appServiceId: number;
    /**
     * Creates the custom domain disabled. Disabled domains do not require custom-domain feature access until enabled.
     * @type {boolean}
     * @memberof NewAppRouteInput
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewAppRouteInput
     */
    main: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewAppRouteInput
     */
    primary: boolean;
    /**
     * 
     * @type {number}
     * @memberof NewAppRouteInput
     */
    port: number;
    /**
     * 
     * @type {string}
     * @memberof NewAppRouteInput
     */
    host: string;
    /**
     * 
     * @type {string}
     * @memberof NewAppRouteInput
     */
    path?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppRouteInput
     */
    pathType?: NewAppRouteInputPathTypeEnum | null;
    /**
     * SERVE sends requests to the selected app service. BACKEND is accepted for backwards compatibility.
     * @type {string}
     * @memberof NewAppRouteInput
     */
    action?: NewAppRouteInputActionEnum | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppRouteInput
     */
    redirectScheme?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppRouteInput
     */
    redirectHost?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppRouteInput
     */
    redirectPath?: string | null;
    /**
     * 
     * @type {number}
     * @memberof NewAppRouteInput
     */
    redirectStatusCode?: number | null;
    /**
     * Enables HTTP Strict Transport Security for a serve route when TLS is active.
     * @type {boolean}
     * @memberof NewAppRouteInput
     */
    hsts?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewAppRouteInput
     */
    letsencrypt?: boolean | null;
    /**
     * 
     * @type {AppRouteTLSInput}
     * @memberof NewAppRouteInput
     */
    tls?: AppRouteTLSInput;
}


/**
 * @export
 */
export const NewAppRouteInputPathTypeEnum = {
    Prefix: 'PREFIX',
    Exact: 'EXACT'
} as const;
export type NewAppRouteInputPathTypeEnum = typeof NewAppRouteInputPathTypeEnum[keyof typeof NewAppRouteInputPathTypeEnum];

/**
 * @export
 */
export const NewAppRouteInputActionEnum = {
    Serve: 'SERVE',
    Backend: 'BACKEND',
    Redirect: 'REDIRECT'
} as const;
export type NewAppRouteInputActionEnum = typeof NewAppRouteInputActionEnum[keyof typeof NewAppRouteInputActionEnum];

/**
 * 
 * @export
 * @interface NewAppServiceCronScheduleInput
 */
export interface NewAppServiceCronScheduleInput {
    /**
     * Stable cron schedule identity. When omitted or blank, the server generates a unique name.
     * @type {string}
     * @memberof NewAppServiceCronScheduleInput
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceCronScheduleInput
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceCronScheduleInput
     */
    crontab: string;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceCronScheduleInput
     */
    command: string;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceCronScheduleInput
     */
    workload?: string | null;
    /**
     * Creates the schedule disabled. Disabled schedules do not require cron feature access.
     * @type {boolean}
     * @memberof NewAppServiceCronScheduleInput
     */
    disabled?: boolean | null;
}
/**
 * 
 * @export
 * @interface NewAppServiceEnvVarInput
 */
export interface NewAppServiceEnvVarInput {
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceEnvVarInput
     */
    workload?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceEnvVarInput
     */
    container?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceEnvVarInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceEnvVarInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewAppServiceEnvVarInput
     */
    secret: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewAppServiceEnvVarInput
     */
    runtime?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewAppServiceEnvVarInput
     */
    build?: boolean | null;
}
/**
 * 
 * @export
 * @interface NewAppServiceInput
 */
export interface NewAppServiceInput {
    /**
     * 
     * @type {number}
     * @memberof NewAppServiceInput
     */
    id: number;
    /**
     * 
     * @type {boolean}
     * @memberof NewAppServiceInput
     */
    disabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceInput
     */
    version?: string | null;
    /**
     * 
     * @type {BuildSourceInput}
     * @memberof NewAppServiceInput
     */
    buildSource?: BuildSourceInput;
    /**
     * 
     * @type {Array<ImportInput>}
     * @memberof NewAppServiceInput
     */
    imports?: Array<ImportInput>;
    /**
     * 
     * @type {Array<VolumeSizeInput>}
     * @memberof NewAppServiceInput
     */
    volumes?: Array<VolumeSizeInput>;
    /**
     * 
     * @type {Array<AppServiceIntegrationInput>}
     * @memberof NewAppServiceInput
     */
    integrations?: Array<AppServiceIntegrationInput>;
    /**
     * 
     * @type {Array<AppServiceSettingInput>}
     * @memberof NewAppServiceInput
     */
    settings?: Array<AppServiceSettingInput>;
    /**
     * 
     * @type {AppServiceDatabaseInput}
     * @memberof NewAppServiceInput
     */
    database?: AppServiceDatabaseInput;
    /**
     * 
     * @type {ResourcesInput}
     * @memberof NewAppServiceInput
     */
    resources?: ResourcesInput;
    /**
     * 
     * @type {ScalabilityInput}
     * @memberof NewAppServiceInput
     */
    scalability?: ScalabilityInput;
}
/**
 * 
 * @export
 * @interface NewAppServiceLogStreamInput
 */
export interface NewAppServiceLogStreamInput {
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceLogStreamInput
     */
    workload?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceLogStreamInput
     */
    container?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceLogStreamInput
     */
    pod?: string | null;
}
/**
 * 
 * @export
 * @interface NewAppServiceOverrideInput
 */
export interface NewAppServiceOverrideInput {
    /**
     * Stack service ID in the selected stack revision.
     * @type {number}
     * @memberof NewAppServiceOverrideInput
     */
    id: number;
    /**
     * 
     * @type {boolean}
     * @memberof NewAppServiceOverrideInput
     */
    disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewAppServiceOverrideInput
     */
    version?: string;
    /**
     * 
     * @type {BuildSourceInput}
     * @memberof NewAppServiceOverrideInput
     */
    buildSource?: BuildSourceInput;
    /**
     * Service settings to set. A setting that is not named keeps its default. Use it to supply a required setting that has no default.
     * @type {Array<AppServiceSettingInput>}
     * @memberof NewAppServiceOverrideInput
     */
    settings?: Array<AppServiceSettingInput>;
    /**
     * The database server, and optionally the database, of a database service. Required to enable an external database service, such as a managed PostgreSQL server.
     * @type {AppServiceDatabaseInput}
     * @memberof NewAppServiceOverrideInput
     */
    database?: AppServiceDatabaseInput;
}
/**
 * 
 * @export
 * @interface NewBackupInput
 */
export interface NewBackupInput {
    /**
     * 
     * @type {number}
     * @memberof NewBackupInput
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewBackupInput
     */
    databaseDbId?: number | null;
    /**
     * Associates a one-off backup with the preset used to populate its destination and options.
     * @type {number}
     * @memberof NewBackupInput
     */
    backupPresetId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof NewBackupInput
     */
    backupName?: string | null;
    /**
     * Use 0 for Wodby Blob Storage.
     * @type {number}
     * @memberof NewBackupInput
     */
    integrationId: number;
    /**
     * Must be empty for Wodby Blob Storage.
     * @type {string}
     * @memberof NewBackupInput
     */
    bucket: string;
    /**
     * 
     * @type {string}
     * @memberof NewBackupInput
     */
    storageClass?: string | null;
    /**
     * Wodby Blob Storage region. Omit to use Europe; must be omitted for third-party storage.
     * @type {string}
     * @memberof NewBackupInput
     */
    blobStorageRegion?: NewBackupInputBlobStorageRegionEnum | null;
    /**
     * 
     * @type {Array<BackupOption>}
     * @memberof NewBackupInput
     */
    options?: Array<BackupOption> | null;
}


/**
 * @export
 */
export const NewBackupInputBlobStorageRegionEnum = {
    Eu: 'eu',
    Us: 'us'
} as const;
export type NewBackupInputBlobStorageRegionEnum = typeof NewBackupInputBlobStorageRegionEnum[keyof typeof NewBackupInputBlobStorageRegionEnum];

/**
 * 
 * @export
 * @interface NewBackupPresetInput
 */
export interface NewBackupPresetInput {
    /**
     * 
     * @type {number}
     * @memberof NewBackupPresetInput
     */
    appInstanceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewBackupPresetInput
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewBackupPresetInput
     */
    databaseId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewBackupPresetInput
     */
    databaseDbId?: number | null;
    /**
     * Optional for API-key requests; defaults to the API key's organization when no more specific target is provided.
     * @type {number}
     * @memberof NewBackupPresetInput
     */
    orgId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewBackupPresetInput
     */
    envId?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewBackupPresetInput
     */
    envTypes?: Array<NewBackupPresetInputEnvTypesEnum> | null;
    /**
     * 
     * @type {string}
     * @memberof NewBackupPresetInput
     */
    backupCategory?: NewBackupPresetInputBackupCategoryEnum | null;
    /**
     * 
     * @type {string}
     * @memberof NewBackupPresetInput
     */
    backupName?: string | null;
    /**
     * Use 0 for Wodby Blob Storage. Free subscriptions may create only an automatic preset that is disabled.
     * @type {number}
     * @memberof NewBackupPresetInput
     */
    integrationId: number;
    /**
     * Must be empty for Wodby Blob Storage.
     * @type {string}
     * @memberof NewBackupPresetInput
     */
    bucket: string;
    /**
     * 
     * @type {string}
     * @memberof NewBackupPresetInput
     */
    storageClass?: string | null;
    /**
     * Wodby Blob Storage region. Omit to use Europe; must be omitted for third-party storage.
     * @type {string}
     * @memberof NewBackupPresetInput
     */
    blobStorageRegion?: NewBackupPresetInputBlobStorageRegionEnum | null;
    /**
     * 
     * @type {Array<BackupOption>}
     * @memberof NewBackupPresetInput
     */
    options?: Array<BackupOption> | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewBackupPresetInput
     */
    disabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewBackupPresetInput
     */
    override: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewBackupPresetInput
     */
    auto?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof NewBackupPresetInput
     */
    crontab?: string | null;
    /**
     * 
     * @type {AutomationTimeWindowInput}
     * @memberof NewBackupPresetInput
     */
    timeWindow?: AutomationTimeWindowInput;
    /**
     * 
     * @type {number}
     * @memberof NewBackupPresetInput
     */
    duration?: number | null;
}


/**
 * @export
 */
export const NewBackupPresetInputEnvTypesEnum = {
    Dev: 'dev',
    Feature: 'feature',
    Test: 'test',
    Staging: 'staging',
    Prod: 'prod'
} as const;
export type NewBackupPresetInputEnvTypesEnum = typeof NewBackupPresetInputEnvTypesEnum[keyof typeof NewBackupPresetInputEnvTypesEnum];

/**
 * @export
 */
export const NewBackupPresetInputBackupCategoryEnum = {
    Any: 'any',
    Files: 'files',
    Database: 'database'
} as const;
export type NewBackupPresetInputBackupCategoryEnum = typeof NewBackupPresetInputBackupCategoryEnum[keyof typeof NewBackupPresetInputBackupCategoryEnum];

/**
 * @export
 */
export const NewBackupPresetInputBlobStorageRegionEnum = {
    Eu: 'eu',
    Us: 'us'
} as const;
export type NewBackupPresetInputBlobStorageRegionEnum = typeof NewBackupPresetInputBlobStorageRegionEnum[keyof typeof NewBackupPresetInputBlobStorageRegionEnum];

/**
 * 
 * @export
 * @interface NewBuildFromCIInput
 */
export interface NewBuildFromCIInput {
    /**
     * 
     * @type {number}
     * @memberof NewBuildFromCIInput
     */
    appServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof NewBuildFromCIInput
     */
    gitCommitSHA: string;
    /**
     * 
     * @type {string}
     * @memberof NewBuildFromCIInput
     */
    gitRef: string;
    /**
     * 
     * @type {string}
     * @memberof NewBuildFromCIInput
     */
    gitRefType: string;
    /**
     * 
     * @type {number}
     * @memberof NewBuildFromCIInput
     */
    buildNum: number;
    /**
     * 
     * @type {string}
     * @memberof NewBuildFromCIInput
     */
    buildId: string;
    /**
     * 
     * @type {string}
     * @memberof NewBuildFromCIInput
     */
    workflow?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewBuildFromCIInput
     */
    gitCommitAuthorName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewBuildFromCIInput
     */
    gitCommitAuthorEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewBuildFromCIInput
     */
    gitCommitMessage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewBuildFromCIInput
     */
    provider: string;
    /**
     * 
     * @type {string}
     * @memberof NewBuildFromCIInput
     */
    postDeployment?: string | null;
}
/**
 * 
 * @export
 * @interface NewClusterInput
 */
export interface NewClusterInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof NewClusterInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewClusterInput
     */
    projectId?: number | null;
    /**
     * Lets every project in the organization use the new resource without a project share. Only an organization-owned resource, created without projectId, can be available to all projects.
     * @type {boolean}
     * @memberof NewClusterInput
     */
    availableToAllProjects?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof NewClusterInput
     */
    integrationId: number;
    /**
     * 
     * @type {string}
     * @memberof NewClusterInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewClusterInput
     */
    title: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewClusterInput
     */
    serverless: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewClusterInput
     */
    singleNode?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof NewClusterInput
     */
    version?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewClusterInput
     */
    machineType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof NewClusterInput
     */
    minNodeCount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewClusterInput
     */
    maxNodeCount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewClusterInput
     */
    nodeDiskSize?: number | null;
    /**
     * 
     * @type {ClusterNodePoolInput}
     * @memberof NewClusterInput
     */
    gpuNodePool?: ClusterNodePoolInput | null;
    /**
     * 
     * @type {string}
     * @memberof NewClusterInput
     */
    zone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewClusterInput
     */
    region?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewClusterInput
     */
    billingOption?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewClusterInput
     */
    disableMonitoring: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewClusterInput
     */
    autoInfrastructureUpgrade?: boolean | null;
    /**
     * 
     * @type {ClusterEnvironmentPolicyInput}
     * @memberof NewClusterInput
     */
    environmentPolicy?: ClusterEnvironmentPolicyInput;
}
/**
 * 
 * @export
 * @interface NewDatabaseDBInput
 */
export interface NewDatabaseDBInput {
    /**
     * 
     * @type {number}
     * @memberof NewDatabaseDBInput
     */
    databaseId: number;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseDBInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseDBInput
     */
    charset?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseDBInput
     */
    collation?: string | null;
}
/**
 * envType is required for the canonical contract. The legacy envId alternative remains accepted, but the two fields cannot be combined.
 * @export
 * @interface NewDatabaseInput
 */
export interface NewDatabaseInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof NewDatabaseInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewDatabaseInput
     */
    projectId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewDatabaseInput
     * @deprecated
     */
    envId?: number;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseInput
     */
    envType?: NewDatabaseInputEnvTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseInput
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof NewDatabaseInput
     */
    integrationKindId: number;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseInput
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseInput
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseInput
     */
    machineType: string;
    /**
     * 
     * @type {number}
     * @memberof NewDatabaseInput
     */
    storageSize?: number | null;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseInput
     */
    password?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewDatabaseInput
     */
    storageAutoscaling?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewDatabaseInput
     */
    highAvailability?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseInput
     */
    region?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseInput
     */
    zone?: string | null;
    /**
     * 
     * @type {number}
     * @memberof NewDatabaseInput
     */
    residedClusterId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewDatabaseInput
     */
    iops?: number | null;
}


/**
 * @export
 */
export const NewDatabaseInputEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type NewDatabaseInputEnvTypeEnum = typeof NewDatabaseInputEnvTypeEnum[keyof typeof NewDatabaseInputEnvTypeEnum];

/**
 * 
 * @export
 * @interface NewDatabaseUserInput
 */
export interface NewDatabaseUserInput {
    /**
     * 
     * @type {number}
     * @memberof NewDatabaseUserInput
     */
    databaseId: number;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseUserInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseUserInput
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof NewDatabaseUserInput
     */
    hostname?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof NewDatabaseUserInput
     */
    databaseDbIds?: Array<number>;
}
/**
 * 
 * @export
 * @interface NewImportInput
 */
export interface NewImportInput {
    /**
     * 
     * @type {number}
     * @memberof NewImportInput
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewImportInput
     */
    databaseDbId?: number | null;
    /**
     * 
     * @type {ImportInput}
     * @memberof NewImportInput
     */
    _import: ImportInput;
}
/**
 * 
 * @export
 * @interface NewIntegrationInput
 */
export interface NewIntegrationInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof NewIntegrationInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewIntegrationInput
     */
    providerId: number;
    /**
     * 
     * @type {string}
     * @memberof NewIntegrationInput
     */
    title: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewIntegrationInput
     */
    kinds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof NewIntegrationInput
     */
    auth?: string | null;
    /**
     * 
     * @type {number}
     * @memberof NewIntegrationInput
     */
    projectId?: number | null;
    /**
     * Lets every project in the organization use the new resource without a project share. Only an organization-owned resource, created without projectId, can be available to all projects.
     * @type {boolean}
     * @memberof NewIntegrationInput
     */
    availableToAllProjects?: boolean | null;
    /**
     * 
     * @type {Array<FieldInput>}
     * @memberof NewIntegrationInput
     */
    fieldsInput?: Array<FieldInput>;
    /**
     * 
     * @type {string}
     * @memberof NewIntegrationInput
     */
    scope?: string | null;
    /**
     * 
     * @type {IntegrationEnvironmentPolicyInput}
     * @memberof NewIntegrationInput
     */
    environmentPolicy?: IntegrationEnvironmentPolicyInput;
}
/**
 * 
 * @export
 * @interface NewK3SClusterInput
 */
export interface NewK3SClusterInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof NewK3SClusterInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewK3SClusterInput
     */
    projectId?: number | null;
    /**
     * Lets every project in the organization use the new resource without a project share. Only an organization-owned resource, created without projectId, can be available to all projects.
     * @type {boolean}
     * @memberof NewK3SClusterInput
     */
    availableToAllProjects?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof NewK3SClusterInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewK3SClusterInput
     */
    title: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewK3SClusterInput
     */
    disableMonitoring: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewK3SClusterInput
     */
    autoInfrastructureUpgrade?: boolean | null;
    /**
     * 
     * @type {ClusterEnvironmentPolicyInput}
     * @memberof NewK3SClusterInput
     */
    environmentPolicy?: ClusterEnvironmentPolicyInput;
}
/**
 * 
 * @export
 * @interface NewProjectInput
 */
export interface NewProjectInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof NewProjectInput
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof NewProjectInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewProjectInput
     */
    title: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof NewProjectInput
     */
    teamIds?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof NewProjectInput
     */
    orgMembershipIds?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof NewProjectInput
     */
    role?: string;
}
/**
 * 
 * @export
 * @interface NewProjectMembershipsInput
 */
export interface NewProjectMembershipsInput {
    /**
     * 
     * @type {number}
     * @memberof NewProjectMembershipsInput
     */
    projectId: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof NewProjectMembershipsInput
     */
    orgMembershipIds?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof NewProjectMembershipsInput
     */
    teamIds?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof NewProjectMembershipsInput
     */
    role: NewProjectMembershipsInputRoleEnum;
}


/**
 * @export
 */
export const NewProjectMembershipsInputRoleEnum = {
    Read: 'read',
    Write: 'write',
    Admin: 'admin'
} as const;
export type NewProjectMembershipsInputRoleEnum = typeof NewProjectMembershipsInputRoleEnum[keyof typeof NewProjectMembershipsInputRoleEnum];

/**
 * 
 * @export
 * @interface NewStackAnnotationInput
 */
export interface NewStackAnnotationInput {
    /**
     * 
     * @type {string}
     * @memberof NewStackAnnotationInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackAnnotationInput
     */
    value: string;
    /**
     * Limit the value to app environments of this type.
     * @type {string}
     * @memberof NewStackAnnotationInput
     */
    envType?: NewStackAnnotationInputEnvTypeEnum | null;
}


/**
 * @export
 */
export const NewStackAnnotationInputEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type NewStackAnnotationInputEnvTypeEnum = typeof NewStackAnnotationInputEnvTypeEnum[keyof typeof NewStackAnnotationInputEnvTypeEnum];

/**
 * 
 * @export
 * @interface NewStackEnvVarInput
 */
export interface NewStackEnvVarInput {
    /**
     * 
     * @type {string}
     * @memberof NewStackEnvVarInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackEnvVarInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackEnvVarInput
     */
    secret: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewStackEnvVarInput
     */
    envType?: string | null;
}
/**
 * 
 * @export
 * @interface NewStackHelmValueInput
 */
export interface NewStackHelmValueInput {
    /**
     * 
     * @type {string}
     * @memberof NewStackHelmValueInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackHelmValueInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackHelmValueInput
     */
    secret: boolean;
    /**
     * Limit the value to app environments of this type.
     * @type {string}
     * @memberof NewStackHelmValueInput
     */
    envType?: NewStackHelmValueInputEnvTypeEnum | null;
}


/**
 * @export
 */
export const NewStackHelmValueInputEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type NewStackHelmValueInputEnvTypeEnum = typeof NewStackHelmValueInputEnvTypeEnum[keyof typeof NewStackHelmValueInputEnvTypeEnum];

/**
 * 
 * @export
 * @interface NewStackInput
 */
export interface NewStackInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof NewStackInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewStackInput
     */
    projectId?: number | null;
    /**
     * Lets every project in the organization use the new resource without a project share. Only an organization-owned resource, created without projectId, can be available to all projects.
     * @type {boolean}
     * @memberof NewStackInput
     */
    availableToAllProjects?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof NewStackInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackInput
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackInput
     */
    icon?: string | null;
    /**
     * 
     * @type {Array<NewStackServiceDefinitionInput>}
     * @memberof NewStackInput
     */
    services: Array<NewStackServiceDefinitionInput>;
}
/**
 * 
 * @export
 * @interface NewStackServiceAnnotationInput
 */
export interface NewStackServiceAnnotationInput {
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceAnnotationInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceAnnotationInput
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceAnnotationInput
     */
    envType?: string | null;
}
/**
 * 
 * @export
 * @interface NewStackServiceCronScheduleInput
 */
export interface NewStackServiceCronScheduleInput {
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceCronScheduleInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceCronScheduleInput
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceCronScheduleInput
     */
    crontab: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceCronScheduleInput
     */
    command: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceCronScheduleInput
     */
    workload?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackServiceCronScheduleInput
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceCronScheduleInput
     */
    envType?: string | null;
}
/**
 * 
 * @export
 * @interface NewStackServiceDefinitionInput
 */
export interface NewStackServiceDefinitionInput {
    /**
     * 
     * @type {number}
     * @memberof NewStackServiceDefinitionInput
     */
    serviceId: number;
    /**
     * Stack-local service name.
     * @type {string}
     * @memberof NewStackServiceDefinitionInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceDefinitionInput
     */
    title: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackServiceDefinitionInput
     */
    required?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof NewStackServiceDefinitionInput
     */
    replicas: number;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackServiceDefinitionInput
     */
    main?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackServiceDefinitionInput
     */
    serviceRevPinned?: boolean | null;
}
/**
 * 
 * @export
 * @interface NewStackServiceEnvVarInput
 */
export interface NewStackServiceEnvVarInput {
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceEnvVarInput
     */
    workload?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceEnvVarInput
     */
    container?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceEnvVarInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceEnvVarInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackServiceEnvVarInput
     */
    secret: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceEnvVarInput
     */
    envType?: string | null;
}
/**
 * 
 * @export
 * @interface NewStackServiceInput
 */
export interface NewStackServiceInput {
    /**
     * 
     * @type {number}
     * @memberof NewStackServiceInput
     */
    stackId: number;
    /**
     * 
     * @type {number}
     * @memberof NewStackServiceInput
     */
    serviceId: number;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceInput
     */
    title: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackServiceInput
     */
    required: boolean;
    /**
     * 
     * @type {number}
     * @memberof NewStackServiceInput
     */
    replicas: number;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackServiceInput
     */
    serviceRevPinned?: boolean | null;
}
/**
 * 
 * @export
 * @interface NewStackServiceScopedValueInput
 */
export interface NewStackServiceScopedValueInput {
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceScopedValueInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceScopedValueInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackServiceScopedValueInput
     */
    secret: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceScopedValueInput
     */
    envType?: string | null;
}
/**
 * 
 * @export
 * @interface NewStackServiceTokenInput
 */
export interface NewStackServiceTokenInput {
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceTokenInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceTokenInput
     */
    value?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackServiceTokenInput
     */
    secret: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceTokenInput
     */
    regex?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewStackServiceTokenInput
     */
    envType?: string | null;
}
/**
 * 
 * @export
 * @interface NewStackTokenInput
 */
export interface NewStackTokenInput {
    /**
     * 
     * @type {string}
     * @memberof NewStackTokenInput
     */
    name: string;
    /**
     * Leave it out to generate a value from regex.
     * @type {string}
     * @memberof NewStackTokenInput
     */
    value?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof NewStackTokenInput
     */
    secret: boolean;
    /**
     * Pattern used to generate the value for each app environment.
     * @type {string}
     * @memberof NewStackTokenInput
     */
    regex?: string | null;
    /**
     * Limit the value to app environments of this type.
     * @type {string}
     * @memberof NewStackTokenInput
     */
    envType?: NewStackTokenInputEnvTypeEnum | null;
}


/**
 * @export
 */
export const NewStackTokenInputEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type NewStackTokenInputEnvTypeEnum = typeof NewStackTokenInputEnvTypeEnum[keyof typeof NewStackTokenInputEnvTypeEnum];

/**
 * 
 * @export
 * @interface NewVariableProviderFieldInput
 */
export interface NewVariableProviderFieldInput {
    /**
     * 
     * @type {string}
     * @memberof NewVariableProviderFieldInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewVariableProviderFieldInput
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof NewVariableProviderFieldInput
     */
    variable: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewVariableProviderFieldInput
     */
    required: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewVariableProviderFieldInput
     */
    secret: boolean;
}
/**
 * 
 * @export
 * @interface NewVariableProviderInput
 */
export interface NewVariableProviderInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof NewVariableProviderInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewVariableProviderInput
     */
    projectId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof NewVariableProviderInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewVariableProviderInput
     */
    title: string;
    /**
     * 
     * @type {Array<NewVariableProviderFieldInput>}
     * @memberof NewVariableProviderInput
     */
    fields: Array<NewVariableProviderFieldInput>;
}
/**
 * 
 * @export
 * @interface NewWodbyCloudClusterInput
 */
export interface NewWodbyCloudClusterInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof NewWodbyCloudClusterInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewWodbyCloudClusterInput
     */
    projectId?: number | null;
    /**
     * Lets every project in the organization use the new resource without a project share. Only an organization-owned resource, created without projectId, can be available to all projects.
     * @type {boolean}
     * @memberof NewWodbyCloudClusterInput
     */
    availableToAllProjects?: boolean | null;
    /**
     * Create a free demo cluster with limited resources.
     * @type {boolean}
     * @memberof NewWodbyCloudClusterInput
     */
    demo: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewWodbyCloudClusterInput
     */
    singleNode?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof NewWodbyCloudClusterInput
     */
    region?: string | null;
    /**
     * Machine type name from GET /wodby-cloud/machine-types.
     * @type {string}
     * @memberof NewWodbyCloudClusterInput
     */
    machineType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof NewWodbyCloudClusterInput
     */
    minNodeCount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewWodbyCloudClusterInput
     */
    maxNodeCount?: number | null;
    /**
     * 
     * @type {ClusterEnvironmentPolicyInput}
     * @memberof NewWodbyCloudClusterInput
     */
    environmentPolicy?: ClusterEnvironmentPolicyInput;
}
/**
 * 
 * @export
 * @interface NewWorkspaceInput
 */
export interface NewWorkspaceInput {
    /**
     * 
     * @type {string}
     * @memberof NewWorkspaceInput
     */
    branch: string;
    /**
     * Storage class for the workspace code and home volumes. Every Pod that mounts the code then runs on one node. Omit both storage fields to use the cluster's default storage class. Not allowed with storageServiceName.
     * @type {string}
     * @memberof NewWorkspaceInput
     */
    storageClassName?: string;
    /**
     * Enabled storage service in the selected stack that shares the workspace files across nodes. Not allowed with storageClassName.
     * @type {string}
     * @memberof NewWorkspaceInput
     */
    storageServiceName?: string;
    /**
     * 
     * @type {number}
     * @memberof NewWorkspaceInput
     */
    codeSize?: number;
    /**
     * 
     * @type {number}
     * @memberof NewWorkspaceInput
     */
    homeSize?: number;
}
/**
 * 
 * @export
 * @interface OperationResult
 */
export interface OperationResult {
    /**
     * 
     * @type {boolean}
     * @memberof OperationResult
     */
    success: boolean;
    /**
     * 
     * @type {number}
     * @memberof OperationResult
     */
    taskId?: number | null;
}
/**
 * 
 * @export
 * @interface Org
 */
export interface Org {
    /**
     * 
     * @type {number}
     * @memberof Org
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    domain: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    defaultTimeZone: string;
    /**
     * Effective default CI integration ID. Zero selects the built-in Wodby CI service.
     * @type {number}
     * @memberof Org
     */
    ciIntegrationId: number;
    /**
     * Effective default registry integration ID. Zero selects the built-in Wodby registry service.
     * @type {number}
     * @memberof Org
     */
    registryIntegrationId: number;
    /**
     * 
     * @type {OrgSettings}
     * @memberof Org
     */
    settings?: OrgSettings;
    /**
     * 
     * @type {OrgCapabilities}
     * @memberof Org
     */
    capabilities?: OrgCapabilities;
    /**
     * Billing summary. Omitted when the caller does not have billing-view access.
     * @type {OrgSubscription}
     * @memberof Org
     */
    subscription?: OrgSubscription;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface OrgCapabilities
 */
export interface OrgCapabilities {
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    customDomains: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    autoBackups: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    users: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    projects: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    cronSchedules: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    autoscale: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    appInstancePause: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    webShell: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    appAccess: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    orgSSO: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgCapabilities
     */
    wodbyCloud: boolean;
}
/**
 * 
 * @export
 * @interface OrgMembership
 */
export interface OrgMembership {
    /**
     * 
     * @type {number}
     * @memberof OrgMembership
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof OrgMembership
     */
    userId?: number | null;
    /**
     * 
     * @type {User}
     * @memberof OrgMembership
     */
    user?: User | null;
    /**
     * 
     * @type {string}
     * @memberof OrgMembership
     */
    email?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrgMembership
     */
    orgId: number;
    /**
     * 
     * @type {string}
     * @memberof OrgMembership
     */
    role: string;
    /**
     * 
     * @type {string}
     * @memberof OrgMembership
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof OrgMembership
     */
    joinedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrgMembership
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof OrgMembership
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface OrgMembershipRoleInput
 */
export interface OrgMembershipRoleInput {
    /**
     * 
     * @type {string}
     * @memberof OrgMembershipRoleInput
     */
    role: OrgMembershipRoleInputRoleEnum;
}


/**
 * @export
 */
export const OrgMembershipRoleInputRoleEnum = {
    Member: 'member',
    Admin: 'admin',
    Owner: 'owner'
} as const;
export type OrgMembershipRoleInputRoleEnum = typeof OrgMembershipRoleInputRoleEnum[keyof typeof OrgMembershipRoleInputRoleEnum];

/**
 * 
 * @export
 * @interface OrgSSODomain
 */
export interface OrgSSODomain {
    /**
     * 
     * @type {number}
     * @memberof OrgSSODomain
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof OrgSSODomain
     */
    domain: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrgSSODomain
     */
    verified: boolean;
    /**
     * DNS record name to create for verification.
     * @type {string}
     * @memberof OrgSSODomain
     */
    verificationRecordName: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSSODomain
     */
    verificationRecordType: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSSODomain
     */
    verificationRecordValue: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSSODomain
     */
    verifiedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrgSSODomain
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSSODomain
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface OrgSSOProvider
 */
export interface OrgSSOProvider {
    /**
     * 
     * @type {number}
     * @memberof OrgSSOProvider
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof OrgSSOProvider
     */
    orgId: number;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProvider
     */
    name: string;
    /**
     * Provider kind, such as oidc, github or saml.
     * @type {string}
     * @memberof OrgSSOProvider
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProvider
     */
    issuerUrl: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProvider
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProvider
     */
    githubOrg?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProvider
     */
    samlIdpMetadataUrl?: string | null;
    /**
     * Entity ID to configure in the SAML identity provider.
     * @type {string}
     * @memberof OrgSSOProvider
     */
    samlSpEntityId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProvider
     */
    samlSpMetadataUrl?: string | null;
    /**
     * Assertion consumer service URL to configure in the SAML identity provider.
     * @type {string}
     * @memberof OrgSSOProvider
     */
    samlAcsUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrgSSOProvider
     */
    enabled: boolean;
    /**
     * Create a membership on first sign-in for people from a verified domain.
     * @type {boolean}
     * @memberof OrgSSOProvider
     */
    jitEnabled: boolean;
    /**
     * 
     * @type {Array<OrgSSODomain>}
     * @memberof OrgSSOProvider
     */
    domains: Array<OrgSSODomain>;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProvider
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProvider
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface OrgSSOProviderInput
 */
export interface OrgSSOProviderInput {
    /**
     * Used when creating a provider. Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof OrgSSOProviderInput
     */
    orgId?: number;
    /**
     * Provider kind when creating, such as oidc, github or saml. It cannot be changed.
     * @type {string}
     * @memberof OrgSSOProviderInput
     */
    kind?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProviderInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProviderInput
     */
    issuerUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProviderInput
     */
    clientId?: string | null;
    /**
     * OIDC or GitHub client secret. Leave it out on update to keep the stored secret.
     * @type {string}
     * @memberof OrgSSOProviderInput
     */
    clientSecret?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProviderInput
     */
    githubOrg?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProviderInput
     */
    samlIdpMetadataUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrgSSOProviderInput
     */
    samlIdpMetadataXml?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrgSSOProviderInput
     */
    enabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrgSSOProviderInput
     */
    jitEnabled: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrgSSOProviderInput
     */
    domains: Array<string>;
}
/**
 * 
 * @export
 * @interface OrgSettings
 */
export interface OrgSettings {
    /**
     * Default build image retention for the organization's app environments.
     * @type {BuildImageCleanupSettings}
     * @memberof OrgSettings
     */
    buildImageCleanup?: BuildImageCleanupSettings;
}
/**
 * 
 * @export
 * @interface OrgSettingsInput
 */
export interface OrgSettingsInput {
    /**
     * 
     * @type {BuildImageCleanupSettingsInput}
     * @memberof OrgSettingsInput
     */
    buildImageCleanup: BuildImageCleanupSettingsInput;
}
/**
 * 
 * @export
 * @interface OrgSubscription
 */
export interface OrgSubscription {
    /**
     * 
     * @type {BillingSubscriptionStatus}
     * @memberof OrgSubscription
     */
    status: BillingSubscriptionStatus;
    /**
     * 
     * @type {OrgSubscriptionPlan}
     * @memberof OrgSubscription
     */
    plan?: OrgSubscriptionPlan;
}


/**
 * 
 * @export
 * @interface OrgSubscriptionDetails
 */
export interface OrgSubscriptionDetails {
    /**
     * 
     * @type {BillingSubscriptionStatus}
     * @memberof OrgSubscriptionDetails
     */
    status: BillingSubscriptionStatus;
    /**
     * 
     * @type {OrgSubscriptionPlanDetails}
     * @memberof OrgSubscriptionDetails
     */
    plan: OrgSubscriptionPlanDetails;
}


/**
 * 
 * @export
 * @interface OrgSubscriptionPlan
 */
export interface OrgSubscriptionPlan {
    /**
     * 
     * @type {string}
     * @memberof OrgSubscriptionPlan
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSubscriptionPlan
     */
    title: string;
}
/**
 * 
 * @export
 * @interface OrgSubscriptionPlanDetails
 */
export interface OrgSubscriptionPlanDetails {
    /**
     * 
     * @type {string}
     * @memberof OrgSubscriptionPlanDetails
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OrgSubscriptionPlanDetails
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof OrgSubscriptionPlanDetails
     */
    usage: number;
    /**
     * 
     * @type {number}
     * @memberof OrgSubscriptionPlanDetails
     */
    usageIncluded: number;
    /**
     * 
     * @type {number}
     * @memberof OrgSubscriptionPlanDetails
     */
    spendingLimit: number;
    /**
     * 
     * @type {number}
     * @memberof OrgSubscriptionPlanDetails
     */
    pricePerUnit: number;
    /**
     * 
     * @type {string}
     * @memberof OrgSubscriptionPlanDetails
     */
    unit: string;
}
/**
 * 
 * @export
 * @interface ProblemDetails
 */
export interface ProblemDetails {
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof ProblemDetails
     */
    status: number;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    detail: string;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    instance?: string;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    message: string;
    /**
     * 
     * @type {Array<ProblemFieldError>}
     * @memberof ProblemDetails
     */
    errors?: Array<ProblemFieldError>;
}
/**
 * 
 * @export
 * @interface ProblemFieldError
 */
export interface ProblemFieldError {
    /**
     * 
     * @type {string}
     * @memberof ProblemFieldError
     */
    field?: string;
    /**
     * 
     * @type {string}
     * @memberof ProblemFieldError
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ProblemFieldError
     */
    detail: string;
}
/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    orgId: number;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface ProjectMembership
 */
export interface ProjectMembership {
    /**
     * 
     * @type {number}
     * @memberof ProjectMembership
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectMembership
     */
    projectId: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectMembership
     */
    orgMembershipId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ProjectMembership
     */
    teamId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectMembership
     */
    role: ProjectMembershipRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof ProjectMembership
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectMembership
     */
    updatedAt: string;
}


/**
 * @export
 */
export const ProjectMembershipRoleEnum = {
    Read: 'read',
    Write: 'write',
    Admin: 'admin'
} as const;
export type ProjectMembershipRoleEnum = typeof ProjectMembershipRoleEnum[keyof typeof ProjectMembershipRoleEnum];

/**
 * 
 * @export
 * @interface ProjectMembershipRoleInput
 */
export interface ProjectMembershipRoleInput {
    /**
     * 
     * @type {string}
     * @memberof ProjectMembershipRoleInput
     */
    role: ProjectMembershipRoleInputRoleEnum;
}


/**
 * @export
 */
export const ProjectMembershipRoleInputRoleEnum = {
    Read: 'read',
    Write: 'write',
    Admin: 'admin'
} as const;
export type ProjectMembershipRoleInputRoleEnum = typeof ProjectMembershipRoleInputRoleEnum[keyof typeof ProjectMembershipRoleInputRoleEnum];

/**
 * 
 * @export
 * @interface ProjectShareInput
 */
export interface ProjectShareInput {
    /**
     * 
     * @type {number}
     * @memberof ProjectShareInput
     */
    projectId: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectShareInput
     */
    access: ProjectShareInputAccessEnum;
}


/**
 * @export
 */
export const ProjectShareInputAccessEnum = {
    Read: 'read',
    Write: 'write'
} as const;
export type ProjectShareInputAccessEnum = typeof ProjectShareInputAccessEnum[keyof typeof ProjectShareInputAccessEnum];

/**
 * 
 * @export
 * @interface Provider
 */
export interface Provider {
    /**
     * 
     * @type {number}
     * @memberof Provider
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    status: string;
    /**
     * 
     * @type {boolean}
     * @memberof Provider
     */
    _public: boolean;
    /**
     * 
     * @type {number}
     * @memberof Provider
     */
    revId: number;
    /**
     * 
     * @type {number}
     * @memberof Provider
     */
    orgId: number;
    /**
     * org when the organization owns the resource, project when one project owns it.
     * @type {string}
     * @memberof Provider
     */
    ownershipScope: ProviderOwnershipScopeEnum;
    /**
     * 
     * @type {number}
     * @memberof Provider
     */
    ownerProjectId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Provider
     */
    updatedAt: string;
}


/**
 * @export
 */
export const ProviderOwnershipScopeEnum = {
    Org: 'org',
    Project: 'project'
} as const;
export type ProviderOwnershipScopeEnum = typeof ProviderOwnershipScopeEnum[keyof typeof ProviderOwnershipScopeEnum];

/**
 * 
 * @export
 * @interface ProviderManifestInput
 */
export interface ProviderManifestInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof ProviderManifestInput
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof ProviderManifestInput
     */
    projectId?: number | null;
    /**
     * Complete variable provider manifest YAML.
     * @type {string}
     * @memberof ProviderManifestInput
     */
    manifestYaml: string;
}
/**
 * 
 * @export
 * @interface ProviderManifestUpdateInput
 */
export interface ProviderManifestUpdateInput {
    /**
     * Complete versioned variable provider manifest YAML.
     * @type {string}
     * @memberof ProviderManifestUpdateInput
     */
    manifestYaml: string;
}
/**
 * 
 * @export
 * @interface ProviderRevision
 */
export interface ProviderRevision {
    /**
     * 
     * @type {number}
     * @memberof ProviderRevision
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ProviderRevision
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProviderRevision
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof ProviderRevision
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof ProviderRevision
     */
    number: number;
    /**
     * 
     * @type {string}
     * @memberof ProviderRevision
     */
    version: string;
    /**
     * 
     * @type {number}
     * @memberof ProviderRevision
     */
    providerId: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ProviderRevision
     */
    manifest?: { [key: string]: any; };
    /**
     * 
     * @type {boolean}
     * @memberof ProviderRevision
     */
    permissionAudit: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProviderRevision
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface ProviderSettingsInput
 */
export interface ProviderSettingsInput {
    /**
     * 
     * @type {GitAutoUpdateSettingsInput}
     * @memberof ProviderSettingsInput
     */
    gitAutoUpdate: GitAutoUpdateSettingsInput;
}
/**
 * 
 * @export
 * @interface ProvidersResponse
 */
export interface ProvidersResponse {
    /**
     * 
     * @type {Array<Provider>}
     * @memberof ProvidersResponse
     */
    items: Array<Provider>;
    /**
     * 
     * @type {number}
     * @memberof ProvidersResponse
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof ProvidersResponse
     */
    nextPage?: number | null;
}
/**
 * 
 * @export
 * @interface RemoteGitRepo
 */
export interface RemoteGitRepo {
    /**
     * 
     * @type {string}
     * @memberof RemoteGitRepo
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof RemoteGitRepo
     */
    name: string;
}
/**
 * 
 * @export
 * @interface RemoteGitRepoFilePresence
 */
export interface RemoteGitRepoFilePresence {
    /**
     * 
     * @type {boolean}
     * @memberof RemoteGitRepoFilePresence
     */
    _exists: boolean;
}
/**
 * 
 * @export
 * @interface RepeatTaskRequest
 */
export interface RepeatTaskRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RepeatTaskRequest
     */
    force: boolean;
}
/**
 * 
 * @export
 * @interface ResolveIntegrationResult
 */
export interface ResolveIntegrationResult {
    /**
     * 
     * @type {Integration}
     * @memberof ResolveIntegrationResult
     */
    integration: Integration;
    /**
     * 
     * @type {boolean}
     * @memberof ResolveIntegrationResult
     */
    created: boolean;
}
/**
 * 
 * @export
 * @interface ResolvedServiceConfig
 */
export interface ResolvedServiceConfig {
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    filepath: string;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    manifestVersion?: string | null;
    /**
     * Whether the default content comes from the service image or its repository.
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    defaultSource: ResolvedServiceConfigDefaultSourceEnum;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    defaultConfig?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    status: ResolvedServiceConfigStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ResolvedServiceConfig
     */
    legacyFallback: boolean;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    image?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    imageDigest?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    sourcePath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    platform: string;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    error?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResolvedServiceConfig
     */
    fetchedAt?: string | null;
}


/**
 * @export
 */
export const ResolvedServiceConfigDefaultSourceEnum = {
    Image: 'image',
    Repository: 'repository'
} as const;
export type ResolvedServiceConfigDefaultSourceEnum = typeof ResolvedServiceConfigDefaultSourceEnum[keyof typeof ResolvedServiceConfigDefaultSourceEnum];

/**
 * @export
 */
export const ResolvedServiceConfigStatusEnum = {
    Pending: 'pending',
    Ready: 'ready',
    Failed: 'failed',
    DigestDrift: 'digest_drift'
} as const;
export type ResolvedServiceConfigStatusEnum = typeof ResolvedServiceConfigStatusEnum[keyof typeof ResolvedServiceConfigStatusEnum];

/**
 * 
 * @export
 * @interface ResourceProjectShare
 */
export interface ResourceProjectShare {
    /**
     * 
     * @type {number}
     * @memberof ResourceProjectShare
     */
    projectId: number;
    /**
     * 
     * @type {string}
     * @memberof ResourceProjectShare
     */
    role: ResourceProjectShareRoleEnum;
}


/**
 * @export
 */
export const ResourceProjectShareRoleEnum = {
    Owner: 'owner',
    Write: 'write',
    Read: 'read'
} as const;
export type ResourceProjectShareRoleEnum = typeof ResourceProjectShareRoleEnum[keyof typeof ResourceProjectShareRoleEnum];

/**
 * Who owns a resource and which projects can use it.
 * @export
 * @interface ResourceSharing
 */
export interface ResourceSharing {
    /**
     * org when the organization owns the resource, project when one project owns it.
     * @type {string}
     * @memberof ResourceSharing
     */
    ownershipScope: ResourceSharingOwnershipScopeEnum;
    /**
     * Project that owns the resource when ownershipScope is project.
     * @type {number}
     * @memberof ResourceSharing
     */
    ownerProjectId?: number | null;
    /**
     * True when every project in the organization can use the resource without a project share. Only organization-owned clusters, integrations, services and stacks can be available to all projects; it is always false for other resources.
     * @type {boolean}
     * @memberof ResourceSharing
     */
    availableToAllProjects: boolean;
    /**
     * Projects the resource is shared with that you can see. The owning project has the owner role.
     * @type {Array<ResourceProjectShare>}
     * @memberof ResourceSharing
     */
    sharedProjects: Array<ResourceProjectShare>;
}


/**
 * @export
 */
export const ResourceSharingOwnershipScopeEnum = {
    Org: 'org',
    Project: 'project'
} as const;
export type ResourceSharingOwnershipScopeEnum = typeof ResourceSharingOwnershipScopeEnum[keyof typeof ResourceSharingOwnershipScopeEnum];

/**
 * 
 * @export
 * @interface ResourceSharingInput
 */
export interface ResourceSharingInput {
    /**
     * org to make the organization the owner, project to make one project the owner.
     * @type {string}
     * @memberof ResourceSharingInput
     */
    ownershipScope: ResourceSharingInputOwnershipScopeEnum;
    /**
     * Project that becomes the owner. Required when ownershipScope is project.
     * @type {number}
     * @memberof ResourceSharingInput
     */
    ownerProjectId?: number | null;
    /**
     * The complete list of project shares. A project left out loses its share. The owning project always keeps write access. You need write access to every project whose share you add or remove.
     * @type {Array<ProjectShareInput>}
     * @memberof ResourceSharingInput
     */
    sharedProjects: Array<ProjectShareInput>;
    /**
     * Lets every project in the organization use the resource without a project share. Only organization-owned clusters, integrations, services and stacks can be available to all projects. Omit it to keep the current setting.
     * @type {boolean}
     * @memberof ResourceSharingInput
     */
    availableToAllProjects?: boolean | null;
}


/**
 * @export
 */
export const ResourceSharingInputOwnershipScopeEnum = {
    Org: 'org',
    Project: 'project'
} as const;
export type ResourceSharingInputOwnershipScopeEnum = typeof ResourceSharingInputOwnershipScopeEnum[keyof typeof ResourceSharingInputOwnershipScopeEnum];

/**
 * 
 * @export
 * @interface ResourcesInput
 */
export interface ResourcesInput {
    /**
     * Omitted or null preserves an existing GPU override. Count zero disables GPUs.
     * @type {GPUResources}
     * @memberof ResourcesInput
     */
    gpu?: GPUResources | null;
    /**
     * 
     * @type {string}
     * @memberof ResourcesInput
     */
    workload?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResourcesInput
     */
    container?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ResourcesInput
     */
    requestCPU?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ResourcesInput
     */
    requestMem?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ResourcesInput
     */
    limitCPU?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ResourcesInput
     */
    limitMem?: number | null;
}
/**
 * 
 * @export
 * @interface ScalabilityInput
 */
export interface ScalabilityInput {
    /**
     * 
     * @type {number}
     * @memberof ScalabilityInput
     */
    averageCPU: number;
    /**
     * 
     * @type {number}
     * @memberof ScalabilityInput
     */
    minReplicas: number;
    /**
     * 
     * @type {number}
     * @memberof ScalabilityInput
     */
    maxReplicas: number;
}
/**
 * 
 * @export
 * @interface ScaleClusterInput
 */
export interface ScaleClusterInput {
    /**
     * 
     * @type {number}
     * @memberof ScaleClusterInput
     */
    minNodeCount: number;
    /**
     * 
     * @type {number}
     * @memberof ScaleClusterInput
     */
    maxNodeCount: number;
}
/**
 * 
 * @export
 * @interface SearchIntegrationsInput
 */
export interface SearchIntegrationsInput {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof SearchIntegrationsInput
     */
    orgId?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof SearchIntegrationsInput
     */
    projectIds?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchIntegrationsInput
     */
    types?: Array<SearchIntegrationsInputTypesEnum>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchIntegrationsInput
     */
    statuses?: Array<SearchIntegrationsInputStatusesEnum>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchIntegrationsInput
     */
    labels?: Array<string>;
    /**
     * 
     * @type {Array<IntegrationVariableRequirementInput>}
     * @memberof SearchIntegrationsInput
     */
    variables?: Array<IntegrationVariableRequirementInput>;
    /**
     * 
     * @type {number}
     * @memberof SearchIntegrationsInput
     * @deprecated
     */
    envId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SearchIntegrationsInput
     */
    envType?: SearchIntegrationsInputEnvTypeEnum | null;
}


/**
 * @export
 */
export const SearchIntegrationsInputTypesEnum = {
    Git: 'GIT',
    Storage: 'STORAGE',
    Kubernetes: 'KUBERNETES',
    Db: 'DB',
    Variable: 'VARIABLE',
    Registry: 'REGISTRY',
    Nfs: 'NFS',
    Ci: 'CI',
    Smtp: 'SMTP',
    ApplicationAccess: 'APPLICATION_ACCESS',
    Vpn: 'VPN'
} as const;
export type SearchIntegrationsInputTypesEnum = typeof SearchIntegrationsInputTypesEnum[keyof typeof SearchIntegrationsInputTypesEnum];

/**
 * @export
 */
export const SearchIntegrationsInputStatusesEnum = {
    Ok: 'OK',
    Creating: 'CREATING',
    Deleting: 'DELETING',
    Deleted: 'DELETED',
    Disabled: 'DISABLED',
    Deprecated: 'DEPRECATED',
    Eol: 'EOL',
    Abandoned: 'ABANDONED',
    Errored: 'ERRORED',
    Updating: 'UPDATING',
    Expired: 'EXPIRED'
} as const;
export type SearchIntegrationsInputStatusesEnum = typeof SearchIntegrationsInputStatusesEnum[keyof typeof SearchIntegrationsInputStatusesEnum];

/**
 * @export
 */
export const SearchIntegrationsInputEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type SearchIntegrationsInputEnvTypeEnum = typeof SearchIntegrationsInputEnvTypeEnum[keyof typeof SearchIntegrationsInputEnvTypeEnum];

/**
 * 
 * @export
 * @interface Service
 */
export interface Service {
    /**
     * 
     * @type {number}
     * @memberof Service
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Service
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Service
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Service
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof Service
     */
    status: string;
    /**
     * 
     * @type {boolean}
     * @memberof Service
     */
    external: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Service
     */
    _public: boolean;
    /**
     * 
     * @type {number}
     * @memberof Service
     */
    revId: number;
    /**
     * 
     * @type {number}
     * @memberof Service
     */
    latestRevNumber: number;
    /**
     * 
     * @type {number}
     * @memberof Service
     */
    orgId: number;
    /**
     * org when the organization owns the resource, project when one project owns it.
     * @type {string}
     * @memberof Service
     */
    ownershipScope: ServiceOwnershipScopeEnum;
    /**
     * 
     * @type {number}
     * @memberof Service
     */
    ownerProjectId?: number | null;
    /**
     * True when every project in the organization can use the resource without a project share.
     * @type {boolean}
     * @memberof Service
     */
    availableToAllProjects: boolean;
    /**
     * 
     * @type {ServiceSettings}
     * @memberof Service
     */
    settings?: ServiceSettings;
    /**
     * 
     * @type {string}
     * @memberof Service
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Service
     */
    updatedAt: string;
}


/**
 * @export
 */
export const ServiceOwnershipScopeEnum = {
    Org: 'org',
    Project: 'project'
} as const;
export type ServiceOwnershipScopeEnum = typeof ServiceOwnershipScopeEnum[keyof typeof ServiceOwnershipScopeEnum];

/**
 * 
 * @export
 * @interface ServiceAutoBaseRevisionUpdateSettings
 */
export interface ServiceAutoBaseRevisionUpdateSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ServiceAutoBaseRevisionUpdateSettings
     */
    enabled: boolean;
}
/**
 * 
 * @export
 * @interface ServiceAutoBaseRevisionUpdateSettingsInput
 */
export interface ServiceAutoBaseRevisionUpdateSettingsInput {
    /**
     * 
     * @type {boolean}
     * @memberof ServiceAutoBaseRevisionUpdateSettingsInput
     */
    enabled: boolean;
}
/**
 * 
 * @export
 * @interface ServiceDeploymentConfiguration
 */
export interface ServiceDeploymentConfiguration {
    /**
     * 
     * @type {ServiceDeploymentPolicy}
     * @memberof ServiceDeploymentConfiguration
     */
    override: ServiceDeploymentPolicy;
    /**
     * 
     * @type {ServiceDeploymentPolicy}
     * @memberof ServiceDeploymentConfiguration
     */
    effective: ServiceDeploymentPolicy;
    /**
     * 
     * @type {Array<ServiceWorkloadDeploymentConfiguration>}
     * @memberof ServiceDeploymentConfiguration
     */
    workloads: Array<ServiceWorkloadDeploymentConfiguration>;
}
/**
 * Replaces the complete service-level deployment override. An empty object clears it.
 * @export
 * @interface ServiceDeploymentConfigurationInput
 */
export interface ServiceDeploymentConfigurationInput {
    /**
     * 
     * @type {ServiceDeploymentStrategy}
     * @memberof ServiceDeploymentConfigurationInput
     */
    strategy?: ServiceDeploymentStrategy;
    /**
     * Absolute number or percentage, such as `0` or `25%`.
     * @type {string}
     * @memberof ServiceDeploymentConfigurationInput
     */
    maxUnavailable?: string;
    /**
     * Absolute number or percentage, such as `1` or `25%`.
     * @type {string}
     * @memberof ServiceDeploymentConfigurationInput
     */
    maxSurge?: string;
    /**
     * Go duration, such as `10s`.
     * @type {string}
     * @memberof ServiceDeploymentConfigurationInput
     */
    minReady?: string;
    /**
     * Go duration, such as `15m`.
     * @type {string}
     * @memberof ServiceDeploymentConfigurationInput
     */
    progressDeadline?: string;
    /**
     * Go duration, such as `11m`.
     * @type {string}
     * @memberof ServiceDeploymentConfigurationInput
     */
    shutdownGracePeriod?: string;
    /**
     * 
     * @type {Array<ServiceWorkloadDeploymentInput>}
     * @memberof ServiceDeploymentConfigurationInput
     */
    workloads?: Array<ServiceWorkloadDeploymentInput>;
}


/**
 * 
 * @export
 * @interface ServiceDeploymentInput
 */
export interface ServiceDeploymentInput {
    /**
     * 
     * @type {string}
     * @memberof ServiceDeploymentInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceDeploymentInput
     */
    image: string;
    /**
     * Set by the CI build when the image was produced from a Dockerfile that does not derive from the service image.
     * @type {boolean}
     * @memberof ServiceDeploymentInput
     */
    unmanagedImage?: boolean | null;
    /**
     * Repository path of an author-provided Dockerfile, reported by the CI build.
     * @type {string}
     * @memberof ServiceDeploymentInput
     */
    dockerfilePath?: string | null;
    /**
     * SHA-256 of the Dockerfile that produced the image, reported by the CI build.
     * @type {string}
     * @memberof ServiceDeploymentInput
     */
    dockerfileHash?: string | null;
}
/**
 * 
 * @export
 * @interface ServiceDeploymentPolicy
 */
export interface ServiceDeploymentPolicy {
    /**
     * 
     * @type {ServiceDeploymentStrategy}
     * @memberof ServiceDeploymentPolicy
     */
    strategy?: ServiceDeploymentStrategy;
    /**
     * Absolute number or percentage, such as `0` or `25%`.
     * @type {string}
     * @memberof ServiceDeploymentPolicy
     */
    maxUnavailable?: string;
    /**
     * Absolute number or percentage, such as `1` or `25%`.
     * @type {string}
     * @memberof ServiceDeploymentPolicy
     */
    maxSurge?: string;
    /**
     * Go duration, such as `10s`.
     * @type {string}
     * @memberof ServiceDeploymentPolicy
     */
    minReady?: string;
    /**
     * Go duration, such as `15m`.
     * @type {string}
     * @memberof ServiceDeploymentPolicy
     */
    progressDeadline?: string;
    /**
     * Go duration, such as `11m`.
     * @type {string}
     * @memberof ServiceDeploymentPolicy
     */
    shutdownGracePeriod?: string;
}



/**
 * 
 * @export
 */
export const ServiceDeploymentStrategy = {
    Rolling: 'ROLLING',
    Recreate: 'RECREATE',
    OnDelete: 'ON_DELETE'
} as const;
export type ServiceDeploymentStrategy = typeof ServiceDeploymentStrategy[keyof typeof ServiceDeploymentStrategy];

/**
 * 
 * @export
 * @interface ServiceIntegrationRequirement
 */
export interface ServiceIntegrationRequirement {
    /**
     * 
     * @type {string}
     * @memberof ServiceIntegrationRequirement
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceIntegrationRequirement
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceIntegrationRequirement
     */
    type: ServiceIntegrationRequirementTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServiceIntegrationRequirement
     */
    labels?: Array<string>;
    /**
     * 
     * @type {Array<IntegrationVariableRequirement>}
     * @memberof ServiceIntegrationRequirement
     */
    variables: Array<IntegrationVariableRequirement>;
    /**
     * 
     * @type {Array<ServiceManifestEnvVar>}
     * @memberof ServiceIntegrationRequirement
     */
    env: Array<ServiceManifestEnvVar>;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceIntegrationRequirement
     */
    required: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceIntegrationRequirement
     */
    multiple: boolean;
}


/**
 * @export
 */
export const ServiceIntegrationRequirementTypeEnum = {
    Git: 'GIT',
    Storage: 'STORAGE',
    Kubernetes: 'KUBERNETES',
    Db: 'DB',
    Variable: 'VARIABLE',
    Registry: 'REGISTRY',
    Nfs: 'NFS',
    Ci: 'CI',
    Smtp: 'SMTP',
    ApplicationAccess: 'APPLICATION_ACCESS',
    Vpn: 'VPN'
} as const;
export type ServiceIntegrationRequirementTypeEnum = typeof ServiceIntegrationRequirementTypeEnum[keyof typeof ServiceIntegrationRequirementTypeEnum];

/**
 * 
 * @export
 * @interface ServiceManifest
 */
export interface ServiceManifest {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof ServiceManifest
     */
    raw: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceManifest
     */
    scalable: boolean;
    /**
     * 
     * @type {Array<ServiceIntegrationRequirement>}
     * @memberof ServiceManifest
     */
    integrations?: Array<ServiceIntegrationRequirement>;
}
/**
 * 
 * @export
 * @interface ServiceManifestEnvVar
 */
export interface ServiceManifestEnvVar {
    /**
     * 
     * @type {string}
     * @memberof ServiceManifestEnvVar
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceManifestEnvVar
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceManifestEnvVar
     */
    secret: boolean;
    /**
     * 
     * @type {string}
     * @memberof ServiceManifestEnvVar
     */
    env?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceManifestEnvVar
     */
    runtime: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceManifestEnvVar
     */
    build: boolean;
}
/**
 * 
 * @export
 * @interface ServiceManifestUpdateInput
 */
export interface ServiceManifestUpdateInput {
    /**
     * Optional service revision version; defaults to the current service version.
     * @type {string}
     * @memberof ServiceManifestUpdateInput
     */
    version?: string;
    /**
     * Complete Wodby service.yml manifest content.
     * @type {string}
     * @memberof ServiceManifestUpdateInput
     */
    manifestYaml: string;
    /**
     * Optional referenced file contents keyed by manifest-relative path, for example Dockerfile or configs/app.conf.
     * @type {{ [key: string]: string; }}
     * @memberof ServiceManifestUpdateInput
     */
    files?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface ServiceRevision
 */
export interface ServiceRevision {
    /**
     * 
     * @type {number}
     * @memberof ServiceRevision
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ServiceRevision
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceRevision
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceRevision
     */
    type: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceRevision
     */
    external: boolean;
    /**
     * 
     * @type {number}
     * @memberof ServiceRevision
     */
    number: number;
    /**
     * 
     * @type {string}
     * @memberof ServiceRevision
     */
    version: string;
    /**
     * 
     * @type {number}
     * @memberof ServiceRevision
     */
    serviceId: number;
    /**
     * 
     * @type {ServiceManifest}
     * @memberof ServiceRevision
     */
    manifest?: ServiceManifest;
    /**
     * 
     * @type {string}
     * @memberof ServiceRevision
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface ServiceRevisionChange
 */
export interface ServiceRevisionChange {
    /**
     * 
     * @type {string}
     * @memberof ServiceRevisionChange
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceRevisionChange
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceRevisionChange
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceRevisionChange
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceRevisionChange
     */
    previousVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceRevisionChange
     */
    version?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ServiceRevisionChange
     */
    previousRevNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ServiceRevisionChange
     */
    revNumber?: number | null;
    /**
     * 
     * @type {Array<StackServiceUpdateChangelogEntry>}
     * @memberof ServiceRevisionChange
     */
    entries: Array<StackServiceUpdateChangelogEntry>;
}
/**
 * 
 * @export
 * @interface ServiceSettings
 */
export interface ServiceSettings {
    /**
     * 
     * @type {GitAutoUpdateSettings}
     * @memberof ServiceSettings
     */
    gitAutoUpdate?: GitAutoUpdateSettings;
    /**
     * 
     * @type {ServiceAutoBaseRevisionUpdateSettings}
     * @memberof ServiceSettings
     */
    autoBaseRevisionUpdate?: ServiceAutoBaseRevisionUpdateSettings;
}
/**
 * 
 * @export
 * @interface ServiceSettingsInput
 */
export interface ServiceSettingsInput {
    /**
     * 
     * @type {GitAutoUpdateSettingsInput}
     * @memberof ServiceSettingsInput
     */
    gitAutoUpdate?: GitAutoUpdateSettingsInput;
    /**
     * 
     * @type {ServiceAutoBaseRevisionUpdateSettingsInput}
     * @memberof ServiceSettingsInput
     */
    autoBaseRevisionUpdate?: ServiceAutoBaseRevisionUpdateSettingsInput;
}
/**
 * 
 * @export
 * @interface ServiceWorkloadDeploymentConfiguration
 */
export interface ServiceWorkloadDeploymentConfiguration {
    /**
     * 
     * @type {string}
     * @memberof ServiceWorkloadDeploymentConfiguration
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceWorkloadDeploymentConfiguration
     */
    kind: ServiceWorkloadDeploymentConfigurationKindEnum;
    /**
     * 
     * @type {ServiceDeploymentPolicy}
     * @memberof ServiceWorkloadDeploymentConfiguration
     */
    override: ServiceDeploymentPolicy;
    /**
     * 
     * @type {ServiceDeploymentPolicy}
     * @memberof ServiceWorkloadDeploymentConfiguration
     */
    effective: ServiceDeploymentPolicy;
}


/**
 * @export
 */
export const ServiceWorkloadDeploymentConfigurationKindEnum = {
    Deployment: 'deployment',
    Statefulset: 'statefulset',
    Daemonset: 'daemonset'
} as const;
export type ServiceWorkloadDeploymentConfigurationKindEnum = typeof ServiceWorkloadDeploymentConfigurationKindEnum[keyof typeof ServiceWorkloadDeploymentConfigurationKindEnum];

/**
 * 
 * @export
 * @interface ServiceWorkloadDeploymentInput
 */
export interface ServiceWorkloadDeploymentInput {
    /**
     * 
     * @type {ServiceDeploymentStrategy}
     * @memberof ServiceWorkloadDeploymentInput
     */
    strategy?: ServiceDeploymentStrategy;
    /**
     * Absolute number or percentage, such as `0` or `25%`.
     * @type {string}
     * @memberof ServiceWorkloadDeploymentInput
     */
    maxUnavailable?: string;
    /**
     * Absolute number or percentage, such as `1` or `25%`.
     * @type {string}
     * @memberof ServiceWorkloadDeploymentInput
     */
    maxSurge?: string;
    /**
     * Go duration, such as `10s`.
     * @type {string}
     * @memberof ServiceWorkloadDeploymentInput
     */
    minReady?: string;
    /**
     * Go duration, such as `15m`.
     * @type {string}
     * @memberof ServiceWorkloadDeploymentInput
     */
    progressDeadline?: string;
    /**
     * Go duration, such as `11m`.
     * @type {string}
     * @memberof ServiceWorkloadDeploymentInput
     */
    shutdownGracePeriod?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceWorkloadDeploymentInput
     */
    name: string;
}


/**
 * 
 * @export
 * @interface ServicesResponse
 */
export interface ServicesResponse {
    /**
     * 
     * @type {Array<Service>}
     * @memberof ServicesResponse
     */
    items: Array<Service>;
    /**
     * 
     * @type {number}
     * @memberof ServicesResponse
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof ServicesResponse
     */
    nextPage?: number | null;
}
/**
 * 
 * @export
 * @interface SetNullableStringValueInput
 */
export interface SetNullableStringValueInput {
    /**
     * 
     * @type {string}
     * @memberof SetNullableStringValueInput
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface SetStringValueInput
 */
export interface SetStringValueInput {
    /**
     * 
     * @type {string}
     * @memberof SetStringValueInput
     */
    value: string;
}
/**
 * 
 * @export
 * @interface Stack
 */
export interface Stack {
    /**
     * 
     * @type {number}
     * @memberof Stack
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    status: string;
    /**
     * 
     * @type {boolean}
     * @memberof Stack
     */
    outdated: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Stack
     */
    _public: boolean;
    /**
     * 
     * @type {number}
     * @memberof Stack
     */
    revId: number;
    /**
     * 
     * @type {number}
     * @memberof Stack
     */
    draftRevId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Stack
     */
    latestRevNumber: number;
    /**
     * 
     * @type {number}
     * @memberof Stack
     */
    gitRepoId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    gitRepoRemoteId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    gitRepoRef?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    gitRepoRefType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Stack
     */
    originStackRevId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Stack
     */
    originStackRevStackId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    originStackRevName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Stack
     */
    originStackRevNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    originStackRevVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    originStackRevCreatedAt?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Stack
     */
    orgId: number;
    /**
     * org when the organization owns the resource, project when one project owns it.
     * @type {string}
     * @memberof Stack
     */
    ownershipScope: StackOwnershipScopeEnum;
    /**
     * 
     * @type {number}
     * @memberof Stack
     */
    ownerProjectId?: number | null;
    /**
     * True when every project in the organization can use the resource without a project share.
     * @type {boolean}
     * @memberof Stack
     */
    availableToAllProjects: boolean;
    /**
     * 
     * @type {StackSettings}
     * @memberof Stack
     */
    settings?: StackSettings;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Stack
     */
    updatedAt: string;
}


/**
 * @export
 */
export const StackOwnershipScopeEnum = {
    Org: 'org',
    Project: 'project'
} as const;
export type StackOwnershipScopeEnum = typeof StackOwnershipScopeEnum[keyof typeof StackOwnershipScopeEnum];

/**
 * 
 * @export
 * @interface StackAnnotation
 */
export interface StackAnnotation {
    /**
     * 
     * @type {number}
     * @memberof StackAnnotation
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StackAnnotation
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackAnnotation
     */
    value?: string | null;
    /**
     * Limit the value to app environments of this type.
     * @type {string}
     * @memberof StackAnnotation
     */
    envType?: StackAnnotationEnvTypeEnum | null;
    /**
     * 
     * @type {string}
     * @memberof StackAnnotation
     */
    createdAt: string;
}


/**
 * @export
 */
export const StackAnnotationEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type StackAnnotationEnvTypeEnum = typeof StackAnnotationEnvTypeEnum[keyof typeof StackAnnotationEnvTypeEnum];

/**
 * 
 * @export
 * @interface StackAutoOriginUpdateSettings
 */
export interface StackAutoOriginUpdateSettings {
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoOriginUpdateSettings
     */
    enabled: boolean;
    /**
     * 
     * @type {StackAutoOriginUpdateVersionPolicy}
     * @memberof StackAutoOriginUpdateSettings
     */
    versionPolicy?: StackAutoOriginUpdateVersionPolicy;
    /**
     * 
     * @type {StackSyncOptions}
     * @memberof StackAutoOriginUpdateSettings
     */
    syncOptions?: StackSyncOptions;
}
/**
 * 
 * @export
 * @interface StackAutoOriginUpdateSettingsInput
 */
export interface StackAutoOriginUpdateSettingsInput {
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoOriginUpdateSettingsInput
     */
    enabled: boolean;
    /**
     * 
     * @type {StackAutoOriginUpdateVersionPolicyInput}
     * @memberof StackAutoOriginUpdateSettingsInput
     */
    versionPolicy?: StackAutoOriginUpdateVersionPolicyInput;
    /**
     * 
     * @type {StackSyncOptionsInput}
     * @memberof StackAutoOriginUpdateSettingsInput
     */
    syncOptions?: StackSyncOptionsInput;
}
/**
 * 
 * @export
 * @interface StackAutoOriginUpdateVersionPolicy
 */
export interface StackAutoOriginUpdateVersionPolicy {
    /**
     * 
     * @type {string}
     * @memberof StackAutoOriginUpdateVersionPolicy
     */
    mode: string;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoOriginUpdateVersionPolicy
     */
    allowPatch: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoOriginUpdateVersionPolicy
     */
    allowMinor: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoOriginUpdateVersionPolicy
     */
    allowMajor: boolean;
}
/**
 * 
 * @export
 * @interface StackAutoOriginUpdateVersionPolicyInput
 */
export interface StackAutoOriginUpdateVersionPolicyInput {
    /**
     * 
     * @type {string}
     * @memberof StackAutoOriginUpdateVersionPolicyInput
     */
    mode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoOriginUpdateVersionPolicyInput
     */
    allowPatch?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoOriginUpdateVersionPolicyInput
     */
    allowMinor?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoOriginUpdateVersionPolicyInput
     */
    allowMajor?: boolean | null;
}
/**
 * 
 * @export
 * @interface StackAutoServiceRevisionUpdateSettings
 */
export interface StackAutoServiceRevisionUpdateSettings {
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoServiceRevisionUpdateSettings
     */
    enabled: boolean;
    /**
     * 
     * @type {StackAutoUpdatePolicy}
     * @memberof StackAutoServiceRevisionUpdateSettings
     */
    policy?: StackAutoUpdatePolicy;
}
/**
 * 
 * @export
 * @interface StackAutoServiceRevisionUpdateSettingsInput
 */
export interface StackAutoServiceRevisionUpdateSettingsInput {
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoServiceRevisionUpdateSettingsInput
     */
    enabled: boolean;
    /**
     * 
     * @type {StackAutoUpdatePolicyInput}
     * @memberof StackAutoServiceRevisionUpdateSettingsInput
     */
    policy?: StackAutoUpdatePolicyInput;
}
/**
 * 
 * @export
 * @interface StackAutoUpdatePolicy
 */
export interface StackAutoUpdatePolicy {
    /**
     * 
     * @type {string}
     * @memberof StackAutoUpdatePolicy
     */
    scope: string;
    /**
     * 
     * @type {StackAutoUpdateVersionPolicy}
     * @memberof StackAutoUpdatePolicy
     */
    versionPolicy?: StackAutoUpdateVersionPolicy;
}
/**
 * 
 * @export
 * @interface StackAutoUpdatePolicyInput
 */
export interface StackAutoUpdatePolicyInput {
    /**
     * 
     * @type {string}
     * @memberof StackAutoUpdatePolicyInput
     */
    scope?: string | null;
    /**
     * 
     * @type {StackAutoUpdateVersionPolicyInput}
     * @memberof StackAutoUpdatePolicyInput
     */
    versionPolicy?: StackAutoUpdateVersionPolicyInput;
}
/**
 * 
 * @export
 * @interface StackAutoUpdateVersionPolicy
 */
export interface StackAutoUpdateVersionPolicy {
    /**
     * 
     * @type {string}
     * @memberof StackAutoUpdateVersionPolicy
     */
    mode: string;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoUpdateVersionPolicy
     */
    allowPatch: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoUpdateVersionPolicy
     */
    allowMinor: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoUpdateVersionPolicy
     */
    allowMajor: boolean;
}
/**
 * 
 * @export
 * @interface StackAutoUpdateVersionPolicyInput
 */
export interface StackAutoUpdateVersionPolicyInput {
    /**
     * 
     * @type {string}
     * @memberof StackAutoUpdateVersionPolicyInput
     */
    mode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoUpdateVersionPolicyInput
     */
    allowPatch?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoUpdateVersionPolicyInput
     */
    allowMinor?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackAutoUpdateVersionPolicyInput
     */
    allowMajor?: boolean | null;
}
/**
 * 
 * @export
 * @interface StackEnvVar
 */
export interface StackEnvVar {
    /**
     * 
     * @type {number}
     * @memberof StackEnvVar
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StackEnvVar
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackEnvVar
     */
    value?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StackEnvVar
     */
    valueSecretId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StackEnvVar
     */
    envType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StackEnvVar
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface StackHelmValue
 */
export interface StackHelmValue {
    /**
     * 
     * @type {number}
     * @memberof StackHelmValue
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StackHelmValue
     */
    name: string;
    /**
     * Omitted for secret values.
     * @type {string}
     * @memberof StackHelmValue
     */
    value?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StackHelmValue
     */
    valueSecretId?: number | null;
    /**
     * Limit the value to app environments of this type.
     * @type {string}
     * @memberof StackHelmValue
     */
    envType?: StackHelmValueEnvTypeEnum | null;
    /**
     * 
     * @type {string}
     * @memberof StackHelmValue
     */
    createdAt: string;
}


/**
 * @export
 */
export const StackHelmValueEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type StackHelmValueEnvTypeEnum = typeof StackHelmValueEnvTypeEnum[keyof typeof StackHelmValueEnvTypeEnum];

/**
 * 
 * @export
 * @interface StackOriginSyncChangelog
 */
export interface StackOriginSyncChangelog {
    /**
     * 
     * @type {string}
     * @memberof StackOriginSyncChangelog
     */
    previousVersion: string;
    /**
     * 
     * @type {string}
     * @memberof StackOriginSyncChangelog
     */
    version: string;
    /**
     * 
     * @type {Array<StackServiceUpdateChangelogEntry>}
     * @memberof StackOriginSyncChangelog
     */
    entries: Array<StackServiceUpdateChangelogEntry>;
}
/**
 * 
 * @export
 * @interface StackRevision
 */
export interface StackRevision {
    /**
     * 
     * @type {number}
     * @memberof StackRevision
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StackRevision
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackRevision
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof StackRevision
     */
    icon: string;
    /**
     * 
     * @type {number}
     * @memberof StackRevision
     */
    number: number;
    /**
     * 
     * @type {boolean}
     * @memberof StackRevision
     */
    draft: boolean;
    /**
     * 
     * @type {string}
     * @memberof StackRevision
     */
    version: string;
    /**
     * 
     * @type {number}
     * @memberof StackRevision
     */
    stackId: number;
    /**
     * 
     * @type {string}
     * @memberof StackRevision
     */
    manifest: string;
    /**
     * 
     * @type {Array<StackRevisionLinkIssue>}
     * @memberof StackRevision
     */
    linkIssues: Array<StackRevisionLinkIssue>;
    /**
     * 
     * @type {string}
     * @memberof StackRevision
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface StackRevisionLinkIssue
 */
export interface StackRevisionLinkIssue {
    /**
     * 
     * @type {string}
     * @memberof StackRevisionLinkIssue
     */
    code: string;
    /**
     * 
     * @type {number}
     * @memberof StackRevisionLinkIssue
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackRevisionLinkIssue
     */
    stackServiceName: string;
    /**
     * 
     * @type {string}
     * @memberof StackRevisionLinkIssue
     */
    stackServiceTitle: string;
    /**
     * 
     * @type {string}
     * @memberof StackRevisionLinkIssue
     */
    linkName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StackRevisionLinkIssue
     */
    targetStackServiceId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StackRevisionLinkIssue
     */
    targetStackServiceName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StackRevisionLinkIssue
     */
    targetStackServiceTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StackRevisionLinkIssue
     */
    message: string;
}
/**
 * 
 * @export
 * @interface StackService
 */
export interface StackService {
    /**
     * 
     * @type {number}
     * @memberof StackService
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StackService
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackService
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof StackService
     */
    type: string;
    /**
     * 
     * @type {boolean}
     * @memberof StackService
     */
    main: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackService
     */
    disabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackService
     */
    required: boolean;
    /**
     * 
     * @type {number}
     * @memberof StackService
     */
    replicas: number;
    /**
     * 
     * @type {boolean}
     * @memberof StackService
     */
    serviceRevPinned: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackService
     */
    outdated: boolean;
    /**
     * 
     * @type {number}
     * @memberof StackService
     */
    serviceRevId: number;
    /**
     * 
     * @type {string}
     * @memberof StackService
     */
    serviceRevName: string;
    /**
     * 
     * @type {string}
     * @memberof StackService
     */
    serviceRevTitle: string;
    /**
     * 
     * @type {string}
     * @memberof StackService
     */
    serviceRevVersion: string;
    /**
     * 
     * @type {number}
     * @memberof StackService
     */
    buildSourceIntegrationId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StackService
     */
    buildSourceRemoteRepoId?: string | null;
    /**
     * 
     * @type {Array<StackServiceOption>}
     * @memberof StackService
     */
    options?: Array<StackServiceOption>;
    /**
     * 
     * @type {Array<StackServiceSetting>}
     * @memberof StackService
     */
    settings?: Array<StackServiceSetting>;
    /**
     * 
     * @type {Array<StackServiceContainer>}
     * @memberof StackService
     */
    containers?: Array<StackServiceContainer>;
    /**
     * 
     * @type {ServiceDeploymentConfiguration}
     * @memberof StackService
     */
    deploymentConfiguration: ServiceDeploymentConfiguration;
    /**
     * 
     * @type {string}
     * @memberof StackService
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof StackService
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface StackServiceAnnotation
 */
export interface StackServiceAnnotation {
    /**
     * 
     * @type {number}
     * @memberof StackServiceAnnotation
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceAnnotation
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceAnnotation
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceAnnotation
     */
    value?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceAnnotation
     */
    envType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceAnnotation
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface StackServiceConfig
 */
export interface StackServiceConfig {
    /**
     * 
     * @type {number}
     * @memberof StackServiceConfig
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceConfig
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceConfig
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceConfig
     */
    config: string;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceConfig
     */
    disabled: boolean;
}
/**
 * 
 * @export
 * @interface StackServiceConfigInput
 */
export interface StackServiceConfigInput {
    /**
     * 
     * @type {string}
     * @memberof StackServiceConfigInput
     */
    config: string;
}
/**
 * 
 * @export
 * @interface StackServiceContainer
 */
export interface StackServiceContainer {
    /**
     * 
     * @type {GPUResources}
     * @memberof StackServiceContainer
     */
    gpu?: GPUResources | null;
    /**
     * 
     * @type {number}
     * @memberof StackServiceContainer
     */
    id?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StackServiceContainer
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceContainer
     */
    workload: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceContainer
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof StackServiceContainer
     */
    requestCPU?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StackServiceContainer
     */
    requestMem?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StackServiceContainer
     */
    limitCPU?: number | null;
    /**
     * 
     * @type {number}
     * @memberof StackServiceContainer
     */
    limitMem?: number | null;
}
/**
 * 
 * @export
 * @interface StackServiceCronSchedule
 */
export interface StackServiceCronSchedule {
    /**
     * 
     * @type {number}
     * @memberof StackServiceCronSchedule
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceCronSchedule
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceCronSchedule
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceCronSchedule
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceCronSchedule
     */
    crontab: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceCronSchedule
     */
    command: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceCronSchedule
     */
    workload?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceCronSchedule
     */
    disabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof StackServiceCronSchedule
     */
    envType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceCronSchedule
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceCronSchedule
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface StackServiceEnvVar
 */
export interface StackServiceEnvVar {
    /**
     * 
     * @type {number}
     * @memberof StackServiceEnvVar
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceEnvVar
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceEnvVar
     */
    workload: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceEnvVar
     */
    container: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceEnvVar
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceEnvVar
     */
    value?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StackServiceEnvVar
     */
    valueSecretId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceEnvVar
     */
    envType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceEnvVar
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface StackServiceHelmValue
 */
export interface StackServiceHelmValue {
    /**
     * 
     * @type {number}
     * @memberof StackServiceHelmValue
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceHelmValue
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceHelmValue
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceHelmValue
     */
    value?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StackServiceHelmValue
     */
    valueSecretId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceHelmValue
     */
    envType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceHelmValue
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface StackServiceInput
 */
export interface StackServiceInput {
    /**
     * 
     * @type {number}
     * @memberof StackServiceInput
     */
    replicas?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceInput
     */
    required?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceInput
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceInput
     */
    main?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceInput
     */
    serviceRevPinned?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceInput
     */
    title?: string | null;
    /**
     * 
     * @type {BuildSourceInput}
     * @memberof StackServiceInput
     */
    buildSource?: BuildSourceInput;
    /**
     * 
     * @type {ServiceDeploymentConfigurationInput}
     * @memberof StackServiceInput
     */
    deployment?: ServiceDeploymentConfigurationInput;
}
/**
 * 
 * @export
 * @interface StackServiceIntegration
 */
export interface StackServiceIntegration {
    /**
     * 
     * @type {number}
     * @memberof StackServiceIntegration
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceIntegration
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceIntegration
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof StackServiceIntegration
     */
    integrationId: number;
}
/**
 * 
 * @export
 * @interface StackServiceLink
 */
export interface StackServiceLink {
    /**
     * 
     * @type {number}
     * @memberof StackServiceLink
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceLink
     */
    stackServiceId: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceLink
     */
    linkedStackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceLink
     */
    name: string;
}
/**
 * 
 * @export
 * @interface StackServiceLinkInput
 */
export interface StackServiceLinkInput {
    /**
     * 
     * @type {number}
     * @memberof StackServiceLinkInput
     */
    linkedStackServiceId?: number | null;
}
/**
 * 
 * @export
 * @interface StackServiceOption
 */
export interface StackServiceOption {
    /**
     * 
     * @type {number}
     * @memberof StackServiceOption
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceOption
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceOption
     */
    version: string;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceOption
     */
    _default: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceOption
     */
    disabled: boolean;
}
/**
 * 
 * @export
 * @interface StackServiceOptionInput
 */
export interface StackServiceOptionInput {
    /**
     * 
     * @type {string}
     * @memberof StackServiceOptionInput
     */
    version: string;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceOptionInput
     */
    _default: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceOptionInput
     */
    disabled: boolean;
}
/**
 * 
 * @export
 * @interface StackServiceOptionsInput
 */
export interface StackServiceOptionsInput {
    /**
     * 
     * @type {Array<StackServiceOptionInput>}
     * @memberof StackServiceOptionsInput
     */
    options: Array<StackServiceOptionInput>;
}
/**
 * 
 * @export
 * @interface StackServiceSetting
 */
export interface StackServiceSetting {
    /**
     * 
     * @type {number}
     * @memberof StackServiceSetting
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceSetting
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceSetting
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceSetting
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceSetting
     */
    secret: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackServiceSetting
     */
    hasValue: boolean;
}
/**
 * 
 * @export
 * @interface StackServiceToken
 */
export interface StackServiceToken {
    /**
     * 
     * @type {number}
     * @memberof StackServiceToken
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceToken
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceToken
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceToken
     */
    value?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceToken
     */
    regex?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StackServiceToken
     */
    valueSecretId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceToken
     */
    envType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StackServiceToken
     */
    createdAt: string;
}
/**
 * 
 * @export
 * @interface StackServiceUpdateChangelog
 */
export interface StackServiceUpdateChangelog {
    /**
     * 
     * @type {number}
     * @memberof StackServiceUpdateChangelog
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceUpdateChangelog
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceUpdateChangelog
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceUpdateChangelog
     */
    previousVersion: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceUpdateChangelog
     */
    version: string;
    /**
     * 
     * @type {number}
     * @memberof StackServiceUpdateChangelog
     */
    previousRevNumber: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceUpdateChangelog
     */
    revNumber: number;
    /**
     * 
     * @type {Array<StackServiceUpdateChangelogEntry>}
     * @memberof StackServiceUpdateChangelog
     */
    entries: Array<StackServiceUpdateChangelogEntry>;
}
/**
 * 
 * @export
 * @interface StackServiceUpdateChangelogEntry
 */
export interface StackServiceUpdateChangelogEntry {
    /**
     * 
     * @type {string}
     * @memberof StackServiceUpdateChangelogEntry
     */
    tag: string;
    /**
     * 
     * @type {string}
     * @memberof StackServiceUpdateChangelogEntry
     */
    description: string;
}
/**
 * 
 * @export
 * @interface StackServiceVolume
 */
export interface StackServiceVolume {
    /**
     * 
     * @type {number}
     * @memberof StackServiceVolume
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof StackServiceVolume
     */
    stackServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof StackServiceVolume
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof StackServiceVolume
     */
    size: number;
}
/**
 * 
 * @export
 * @interface StackServiceVolumeInput
 */
export interface StackServiceVolumeInput {
    /**
     * 
     * @type {number}
     * @memberof StackServiceVolumeInput
     */
    size?: number | null;
}
/**
 * 
 * @export
 * @interface StackSettings
 */
export interface StackSettings {
    /**
     * 
     * @type {GitAutoUpdateSettings}
     * @memberof StackSettings
     */
    gitAutoUpdate?: GitAutoUpdateSettings;
    /**
     * 
     * @type {StackAutoServiceRevisionUpdateSettings}
     * @memberof StackSettings
     */
    autoServiceRevisionUpdate?: StackAutoServiceRevisionUpdateSettings;
    /**
     * 
     * @type {StackAutoOriginUpdateSettings}
     * @memberof StackSettings
     */
    autoOriginStackUpdate?: StackAutoOriginUpdateSettings;
}
/**
 * 
 * @export
 * @interface StackSettingsInput
 */
export interface StackSettingsInput {
    /**
     * 
     * @type {GitAutoUpdateSettingsInput}
     * @memberof StackSettingsInput
     */
    gitAutoUpdate?: GitAutoUpdateSettingsInput;
    /**
     * 
     * @type {StackAutoServiceRevisionUpdateSettingsInput}
     * @memberof StackSettingsInput
     */
    autoServiceRevisionUpdate?: StackAutoServiceRevisionUpdateSettingsInput;
    /**
     * 
     * @type {StackAutoOriginUpdateSettingsInput}
     * @memberof StackSettingsInput
     */
    autoOriginStackUpdate?: StackAutoOriginUpdateSettingsInput;
}
/**
 * 
 * @export
 * @interface StackSyncOptions
 */
export interface StackSyncOptions {
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptions
     */
    deleteStackHelmValues: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptions
     */
    deleteStackEnvVars: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptions
     */
    deleteStackTokens: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptions
     */
    deleteStackAnnotations: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptions
     */
    deleteStackServices: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptions
     */
    deleteStackServicesConfiguration: boolean;
}
/**
 * 
 * @export
 * @interface StackSyncOptionsInput
 */
export interface StackSyncOptionsInput {
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptionsInput
     */
    deleteStackHelmValues?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptionsInput
     */
    deleteStackEnvVars?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptionsInput
     */
    deleteStackTokens?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptionsInput
     */
    deleteStackAnnotations?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptionsInput
     */
    deleteStackServices?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof StackSyncOptionsInput
     */
    deleteStackServicesConfiguration?: boolean | null;
}
/**
 * 
 * @export
 * @interface StackToken
 */
export interface StackToken {
    /**
     * 
     * @type {number}
     * @memberof StackToken
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StackToken
     */
    name: string;
    /**
     * Omitted for secret values.
     * @type {string}
     * @memberof StackToken
     */
    value?: string | null;
    /**
     * 
     * @type {number}
     * @memberof StackToken
     */
    valueSecretId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof StackToken
     */
    regex?: string | null;
    /**
     * Limit the value to app environments of this type.
     * @type {string}
     * @memberof StackToken
     */
    envType?: StackTokenEnvTypeEnum | null;
    /**
     * 
     * @type {string}
     * @memberof StackToken
     */
    createdAt: string;
}


/**
 * @export
 */
export const StackTokenEnvTypeEnum = {
    Prod: 'prod',
    Test: 'test',
    Staging: 'staging',
    Dev: 'dev',
    Feature: 'feature'
} as const;
export type StackTokenEnvTypeEnum = typeof StackTokenEnvTypeEnum[keyof typeof StackTokenEnvTypeEnum];

/**
 * 
 * @export
 * @interface StacksResponse
 */
export interface StacksResponse {
    /**
     * 
     * @type {Array<Stack>}
     * @memberof StacksResponse
     */
    items: Array<Stack>;
    /**
     * 
     * @type {number}
     * @memberof StacksResponse
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof StacksResponse
     */
    nextPage?: number | null;
}
/**
 * 
 * @export
 * @interface StartAgentChatRequest
 */
export interface StartAgentChatRequest {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof StartAgentChatRequest
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof StartAgentChatRequest
     */
    message: string;
    /**
     * Optional; without it, the chat asks before every change.
     * @type {AgentChatApprovalMode}
     * @memberof StartAgentChatRequest
     */
    approvalMode?: AgentChatApprovalMode;
}


/**
 * 
 * @export
 * @interface StorageClass
 */
export interface StorageClass {
    /**
     * 
     * @type {string}
     * @memberof StorageClass
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StorageClass
     */
    provisioner: string;
    /**
     * 
     * @type {string}
     * @memberof StorageClass
     */
    reclaimPolicy?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof StorageClass
     */
    allowVolumeExpansion: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof StorageClass
     */
    mountOptions: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StorageClass
     */
    volumeBindingMode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof StorageClass
     */
    isDefault: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StorageClass
     */
    selectable: boolean;
}
/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * Absent when provenance is unknown; absence does not imply human initiation.
     * @type {TaskInitiator}
     * @memberof Task
     */
    initiator?: TaskInitiator | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    compactTitle: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    executionScope: TaskExecutionScopeEnum;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    progress: number;
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    silent: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Task
     */
    system: boolean;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    userId: number;
    /**
     * 
     * @type {User}
     * @memberof Task
     */
    user?: User | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    orgId?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof Task
     */
    projectIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    appId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    appInstanceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    clusterId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    databaseId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    integrationId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    serviceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    stackId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    providerId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    originTaskId?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof Task
     */
    spawnedTaskIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    repeatedTaskId?: number | null;
    /**
     * 
     * @type {Array<TaskJob>}
     * @memberof Task
     */
    jobs: Array<TaskJob>;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    startedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    endedAt?: string | null;
}


/**
 * @export
 */
export const TaskExecutionScopeEnum = {
    User: 'user',
    Org: 'org',
    Project: 'project',
    LegacyUnknown: 'legacy_unknown'
} as const;
export type TaskExecutionScopeEnum = typeof TaskExecutionScopeEnum[keyof typeof TaskExecutionScopeEnum];

/**
 * Immutable provenance. Client names and versions are self-reported, not verified identities. Contains no credentials.
 * @export
 * @interface TaskInitiator
 */
export interface TaskInitiator {
    /**
     * 
     * @type {string}
     * @memberof TaskInitiator
     */
    source: TaskInitiatorSourceEnum;
    /**
     * 
     * @type {number}
     * @memberof TaskInitiator
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof TaskInitiator
     */
    apiKeyId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TaskInitiator
     */
    agentConnectionId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TaskInitiator
     */
    oauthClientId: string;
    /**
     * 
     * @type {string}
     * @memberof TaskInitiator
     */
    oauthClientName: string;
    /**
     * 
     * @type {string}
     * @memberof TaskInitiator
     */
    clientName: string;
    /**
     * 
     * @type {string}
     * @memberof TaskInitiator
     */
    clientVersion: string;
    /**
     * 
     * @type {string}
     * @memberof TaskInitiator
     */
    toolName: string;
    /**
     * 
     * @type {string}
     * @memberof TaskInitiator
     */
    requestId: string;
}


/**
 * @export
 */
export const TaskInitiatorSourceEnum = {
    Mcp: 'mcp'
} as const;
export type TaskInitiatorSourceEnum = typeof TaskInitiatorSourceEnum[keyof typeof TaskInitiatorSourceEnum];

/**
 * 
 * @export
 * @interface TaskJob
 */
export interface TaskJob {
    /**
     * 
     * @type {number}
     * @memberof TaskJob
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof TaskJob
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TaskJob
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof TaskJob
     */
    status: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TaskJob
     */
    after?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof TaskJob
     */
    timeout: number;
    /**
     * 
     * @type {boolean}
     * @memberof TaskJob
     */
    isSystem: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskJob
     */
    statusTitle: string;
    /**
     * 
     * @type {Array<TaskStep>}
     * @memberof TaskJob
     */
    steps: Array<TaskStep>;
    /**
     * 
     * @type {string}
     * @memberof TaskJob
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof TaskJob
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof TaskJob
     */
    startedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TaskJob
     */
    endedAt?: string | null;
}
/**
 * 
 * @export
 * @interface TaskStep
 */
export interface TaskStep {
    /**
     * 
     * @type {number}
     * @memberof TaskStep
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof TaskStep
     */
    position: number;
    /**
     * 
     * @type {string}
     * @memberof TaskStep
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TaskStep
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof TaskStep
     */
    logStatus: string;
    /**
     * 
     * @type {boolean}
     * @memberof TaskStep
     */
    isSystem: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskStep
     */
    startedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TaskStep
     */
    endedAt?: string | null;
}
/**
 * 
 * @export
 * @interface TaskStepLogs
 */
export interface TaskStepLogs {
    /**
     * 
     * @type {string}
     * @memberof TaskStepLogs
     */
    status: TaskStepLogsStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof TaskStepLogs
     */
    streamId?: number | null;
    /**
     * Temporary URL for persisted logs when URL delivery is selected or auto-selected.
     * @type {string}
     * @memberof TaskStepLogs
     */
    url?: string | null;
    /**
     * 
     * @type {Array<LogLine>}
     * @memberof TaskStepLogs
     */
    lines: Array<LogLine>;
}


/**
 * @export
 */
export const TaskStepLogsStatusEnum = {
    Persisted: 'persisted',
    Empty: 'empty',
    Pending: 'pending'
} as const;
export type TaskStepLogsStatusEnum = typeof TaskStepLogsStatusEnum[keyof typeof TaskStepLogsStatusEnum];

/**
 * 
 * @export
 * @interface TaskTreeItem
 */
export interface TaskTreeItem {
    /**
     * 
     * @type {Task}
     * @memberof TaskTreeItem
     */
    task: Task;
    /**
     * 
     * @type {number}
     * @memberof TaskTreeItem
     */
    parentId?: number | null;
}
/**
 * 
 * @export
 * @interface TasksResponse
 */
export interface TasksResponse {
    /**
     * 
     * @type {Array<Task>}
     * @memberof TasksResponse
     */
    items: Array<Task>;
    /**
     * Bounded current-page roots and authorized descendants for tree view, linked by parentId.
     * @type {Array<TaskTreeItem>}
     * @memberof TasksResponse
     */
    treeItems?: Array<TaskTreeItem> | null;
    /**
     * True when treeItems omitted visible descendants after reaching the 250-item response limit. Always false for flat view.
     * @type {boolean}
     * @memberof TasksResponse
     */
    treeTruncated: boolean;
    /**
     * True when the current user may request operator-only system tasks.
     * @type {boolean}
     * @memberof TasksResponse
     */
    canIncludeSystem: boolean;
    /**
     * 
     * @type {number}
     * @memberof TasksResponse
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof TasksResponse
     */
    nextPage?: number | null;
}
/**
 * 
 * @export
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {number}
     * @memberof Team
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof Team
     */
    orgId: number;
    /**
     * 
     * @type {Array<TeamMember>}
     * @memberof Team
     */
    members: Array<TeamMember>;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface TeamInput
 */
export interface TeamInput {
    /**
     * Used when creating a team. Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof TeamInput
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TeamInput
     */
    title: string;
    /**
     * The complete member list.
     * @type {Array<TeamMemberInput>}
     * @memberof TeamInput
     */
    members: Array<TeamMemberInput>;
}
/**
 * 
 * @export
 * @interface TeamMember
 */
export interface TeamMember {
    /**
     * 
     * @type {number}
     * @memberof TeamMember
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof TeamMember
     */
    orgMembershipId: number;
    /**
     * 
     * @type {string}
     * @memberof TeamMember
     */
    role: TeamMemberRoleEnum;
}


/**
 * @export
 */
export const TeamMemberRoleEnum = {
    Member: 'member',
    Leader: 'leader'
} as const;
export type TeamMemberRoleEnum = typeof TeamMemberRoleEnum[keyof typeof TeamMemberRoleEnum];

/**
 * 
 * @export
 * @interface TeamMemberInput
 */
export interface TeamMemberInput {
    /**
     * 
     * @type {number}
     * @memberof TeamMemberInput
     */
    orgMembershipId: number;
    /**
     * 
     * @type {string}
     * @memberof TeamMemberInput
     */
    role: TeamMemberInputRoleEnum;
}


/**
 * @export
 */
export const TeamMemberInputRoleEnum = {
    Member: 'member',
    Leader: 'leader'
} as const;
export type TeamMemberInputRoleEnum = typeof TeamMemberInputRoleEnum[keyof typeof TeamMemberInputRoleEnum];

/**
 * 
 * @export
 * @interface URLResponse
 */
export interface URLResponse {
    /**
     * 
     * @type {string}
     * @memberof URLResponse
     */
    url: string;
}
/**
 * 
 * @export
 * @interface UpdateAppAccessInput
 */
export interface UpdateAppAccessInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateAppAccessInput
     */
    scope: UpdateAppAccessInputScopeEnum;
    /**
     * 
     * @type {Array<AppAccessSettingInput>}
     * @memberof UpdateAppAccessInput
     */
    settings?: Array<AppAccessSettingInput>;
    /**
     * 
     * @type {Array<AppAccessEndpointInput>}
     * @memberof UpdateAppAccessInput
     */
    endpoints: Array<AppAccessEndpointInput>;
}


/**
 * @export
 */
export const UpdateAppAccessInputScopeEnum = {
    EntireApp: 'ENTIRE_APP',
    SelectedEndpoints: 'SELECTED_ENDPOINTS'
} as const;
export type UpdateAppAccessInputScopeEnum = typeof UpdateAppAccessInputScopeEnum[keyof typeof UpdateAppAccessInputScopeEnum];

/**
 * 
 * @export
 * @interface UpdateAppAnnotationInput
 */
export interface UpdateAppAnnotationInput {
    /**
     * 
     * @type {number}
     * @memberof UpdateAppAnnotationInput
     */
    appServiceId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateAppAnnotationInput
     */
    appRouteId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppAnnotationInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppAnnotationInput
     */
    value: string;
}
/**
 * 
 * @export
 * @interface UpdateAppAuthInput
 */
export interface UpdateAppAuthInput {
    /**
     * App services to protect. Omit every scope field to preserve the current scope, or pass an empty list to protect the whole app environment.
     * @type {Array<number>}
     * @memberof UpdateAppAuthInput
     */
    appServiceIds?: Array<number> | null;
    /**
     * Single-service scope. Ignored when appServiceIds is supplied.
     * @type {number}
     * @memberof UpdateAppAuthInput
     * @deprecated
     */
    appServiceId?: number | null;
    /**
     * Moves the entry to route scope. The owning app service is derived from the route.
     * @type {number}
     * @memberof UpdateAppAuthInput
     */
    appRouteId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppAuthInput
     */
    login: string;
    /**
     * Replaces the existing secret when supplied; omit to keep the current password.
     * @type {string}
     * @memberof UpdateAppAuthInput
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppAuthInput
     */
    realm: string;
}
/**
 * 
 * @export
 * @interface UpdateAppPortInput
 */
export interface UpdateAppPortInput {
    /**
     * Public port on the cluster's address.
     * @type {number}
     * @memberof UpdateAppPortInput
     */
    publicPort?: number | null;
}
/**
 * 
 * @export
 * @interface UpdateAppRouteInput
 */
export interface UpdateAppRouteInput {
    /**
     * Target app service for retargeting. Must be supplied together with port.
     * @type {number}
     * @memberof UpdateAppRouteInput
     */
    appServiceId?: number | null;
    /**
     * Target public HTTP port for retargeting. Must be supplied together with appServiceId.
     * @type {number}
     * @memberof UpdateAppRouteInput
     */
    port?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAppRouteInput
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAppRouteInput
     */
    main?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAppRouteInput
     */
    primary?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppRouteInput
     */
    path?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppRouteInput
     */
    pathType?: UpdateAppRouteInputPathTypeEnum | null;
    /**
     * SERVE sends requests to the selected app service. BACKEND is accepted for backwards compatibility.
     * @type {string}
     * @memberof UpdateAppRouteInput
     */
    action?: UpdateAppRouteInputActionEnum | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppRouteInput
     */
    redirectScheme?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppRouteInput
     */
    redirectHost?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppRouteInput
     */
    redirectPath?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateAppRouteInput
     */
    redirectStatusCode?: number | null;
    /**
     * 
     * @type {AppRouteTLSInput}
     * @memberof UpdateAppRouteInput
     */
    tls?: AppRouteTLSInput;
}


/**
 * @export
 */
export const UpdateAppRouteInputPathTypeEnum = {
    Prefix: 'PREFIX',
    Exact: 'EXACT'
} as const;
export type UpdateAppRouteInputPathTypeEnum = typeof UpdateAppRouteInputPathTypeEnum[keyof typeof UpdateAppRouteInputPathTypeEnum];

/**
 * @export
 */
export const UpdateAppRouteInputActionEnum = {
    Serve: 'SERVE',
    Backend: 'BACKEND',
    Redirect: 'REDIRECT'
} as const;
export type UpdateAppRouteInputActionEnum = typeof UpdateAppRouteInputActionEnum[keyof typeof UpdateAppRouteInputActionEnum];

/**
 * 
 * @export
 * @interface UpdateAppServiceCronScheduleInput
 */
export interface UpdateAppServiceCronScheduleInput {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAppServiceCronScheduleInput
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppServiceCronScheduleInput
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppServiceCronScheduleInput
     */
    crontab?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppServiceCronScheduleInput
     */
    command?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateAppServiceCronScheduleInput
     */
    workload?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateAppServiceDatabaseInput
 */
export interface UpdateAppServiceDatabaseInput {
    /**
     * 
     * @type {number}
     * @memberof UpdateAppServiceDatabaseInput
     */
    databaseDbId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateAppServiceDatabaseInput
     */
    databaseUserId?: number | null;
}
/**
 * 
 * @export
 * @interface UpdateAppServiceEnvVarInput
 */
export interface UpdateAppServiceEnvVarInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateAppServiceEnvVarInput
     */
    value?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAppServiceEnvVarInput
     */
    secret: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAppServiceEnvVarInput
     */
    runtime?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAppServiceEnvVarInput
     */
    build?: boolean | null;
}
/**
 * 
 * @export
 * @interface UpdateBackupPresetInput
 */
export interface UpdateBackupPresetInput {
    /**
     * Omit to preserve the current filter; use an empty array to clear it.
     * @type {Array<string>}
     * @memberof UpdateBackupPresetInput
     */
    envTypes?: Array<UpdateBackupPresetInputEnvTypesEnum> | null;
    /**
     * Omit to preserve the current category.
     * @type {string}
     * @memberof UpdateBackupPresetInput
     */
    backupCategory?: UpdateBackupPresetInputBackupCategoryEnum | null;
    /**
     * Use 0 for Wodby Blob Storage. Enabling the preset requires a paid subscription.
     * @type {number}
     * @memberof UpdateBackupPresetInput
     */
    integrationId: number;
    /**
     * Must be empty for Wodby Blob Storage.
     * @type {string}
     * @memberof UpdateBackupPresetInput
     */
    bucket: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateBackupPresetInput
     */
    storageClass?: string | null;
    /**
     * Wodby Blob Storage region. Omit to preserve the current region; must be omitted for third-party storage.
     * @type {string}
     * @memberof UpdateBackupPresetInput
     */
    blobStorageRegion?: UpdateBackupPresetInputBlobStorageRegionEnum | null;
    /**
     * 
     * @type {Array<BackupOption>}
     * @memberof UpdateBackupPresetInput
     */
    options?: Array<BackupOption> | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateBackupPresetInput
     */
    disabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateBackupPresetInput
     */
    override: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateBackupPresetInput
     */
    auto: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateBackupPresetInput
     */
    crontab?: string | null;
    /**
     * 
     * @type {AutomationTimeWindowInput}
     * @memberof UpdateBackupPresetInput
     */
    timeWindow?: AutomationTimeWindowInput;
    /**
     * 
     * @type {number}
     * @memberof UpdateBackupPresetInput
     */
    duration?: number | null;
}


/**
 * @export
 */
export const UpdateBackupPresetInputEnvTypesEnum = {
    Dev: 'dev',
    Feature: 'feature',
    Test: 'test',
    Staging: 'staging',
    Prod: 'prod'
} as const;
export type UpdateBackupPresetInputEnvTypesEnum = typeof UpdateBackupPresetInputEnvTypesEnum[keyof typeof UpdateBackupPresetInputEnvTypesEnum];

/**
 * @export
 */
export const UpdateBackupPresetInputBackupCategoryEnum = {
    Any: 'any',
    Files: 'files',
    Database: 'database'
} as const;
export type UpdateBackupPresetInputBackupCategoryEnum = typeof UpdateBackupPresetInputBackupCategoryEnum[keyof typeof UpdateBackupPresetInputBackupCategoryEnum];

/**
 * @export
 */
export const UpdateBackupPresetInputBlobStorageRegionEnum = {
    Eu: 'eu',
    Us: 'us'
} as const;
export type UpdateBackupPresetInputBlobStorageRegionEnum = typeof UpdateBackupPresetInputBlobStorageRegionEnum[keyof typeof UpdateBackupPresetInputBlobStorageRegionEnum];

/**
 * 
 * @export
 * @interface UpdateClusterGPUNodePoolInput
 */
export interface UpdateClusterGPUNodePoolInput {
    /**
     * 
     * @type {ClusterNodePoolInput}
     * @memberof UpdateClusterGPUNodePoolInput
     */
    gpuNodePool: ClusterNodePoolInput | null;
}
/**
 * 
 * @export
 * @interface UpdateCurrentUserRequest
 */
export interface UpdateCurrentUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateCurrentUserRequest
     */
    name: string;
}
/**
 * 
 * @export
 * @interface UpdateDatabaseUserDBsInput
 */
export interface UpdateDatabaseUserDBsInput {
    /**
     * 
     * @type {Array<number>}
     * @memberof UpdateDatabaseUserDBsInput
     */
    databaseDbIds: Array<number>;
}
/**
 * 
 * @export
 * @interface UpdateIntegrationInput
 */
export interface UpdateIntegrationInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateIntegrationInput
     */
    title: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateIntegrationInput
     */
    kinds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UpdateIntegrationInput
     */
    scope?: string | null;
    /**
     * 
     * @type {Array<FieldInput>}
     * @memberof UpdateIntegrationInput
     */
    fieldsInput?: Array<FieldInput>;
}
/**
 * 
 * @export
 * @interface UpdateK3SClusterPublicIPInput
 */
export interface UpdateK3SClusterPublicIPInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateK3SClusterPublicIPInput
     */
    publicIp: string;
}
/**
 * 
 * @export
 * @interface UpdateKubernetesVersionInput
 */
export interface UpdateKubernetesVersionInput {
    /**
     * Target Kubernetes version from the cluster's upgrade plan.
     * @type {string}
     * @memberof UpdateKubernetesVersionInput
     */
    version: string;
}
/**
 * 
 * @export
 * @interface UpdateOrgRequest
 */
export interface UpdateOrgRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateOrgRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrgRequest
     */
    defaultTimeZone?: string;
    /**
     * Omit or use null to preserve the current default, use 0 for the built-in registry, or use an organization-owned registry integration ID.
     * @type {number}
     * @memberof UpdateOrgRequest
     */
    registryIntegrationId?: number | null;
    /**
     * Omit or use null to preserve the current default, use 0 for the built-in CI service, or use an organization-owned CI integration ID.
     * @type {number}
     * @memberof UpdateOrgRequest
     */
    ciIntegrationId?: number | null;
}
/**
 * 
 * @export
 * @interface UpdateProjectInput
 */
export interface UpdateProjectInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateProjectInput
     */
    title: string;
}
/**
 * 
 * @export
 * @interface UpdateProviderInput
 */
export interface UpdateProviderInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateProviderInput
     */
    title: string;
}
/**
 * 
 * @export
 * @interface UpdateSecretValueInput
 */
export interface UpdateSecretValueInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateSecretValueInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateSecretValueInput
     */
    secret: boolean;
}
/**
 * 
 * @export
 * @interface UpdateStackEnvVarInput
 */
export interface UpdateStackEnvVarInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateStackEnvVarInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStackEnvVarInput
     */
    secret: boolean;
}
/**
 * 
 * @export
 * @interface UpdateStackFromGitRequest
 */
export interface UpdateStackFromGitRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateStackFromGitRequest
     */
    gitRef: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateStackFromGitRequest
     */
    gitRefType: string;
}
/**
 * 
 * @export
 * @interface UpdateStackHelmValueInput
 */
export interface UpdateStackHelmValueInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateStackHelmValueInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStackHelmValueInput
     */
    secret: boolean;
}
/**
 * 
 * @export
 * @interface UpdateStackRequest
 */
export interface UpdateStackRequest {
    /**
     * Unique stack machine name within the organization.
     * @type {string}
     * @memberof UpdateStackRequest
     */
    name: string;
    /**
     * Human-readable stack title.
     * @type {string}
     * @memberof UpdateStackRequest
     */
    title: string;
}
/**
 * 
 * @export
 * @interface UpdateStackServiceCronScheduleInput
 */
export interface UpdateStackServiceCronScheduleInput {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStackServiceCronScheduleInput
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStackServiceCronScheduleInput
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStackServiceCronScheduleInput
     */
    crontab?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStackServiceCronScheduleInput
     */
    command?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStackServiceCronScheduleInput
     */
    workload?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStackServiceCronScheduleInput
     */
    envType?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateStackServiceEnvVarInput
 */
export interface UpdateStackServiceEnvVarInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateStackServiceEnvVarInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStackServiceEnvVarInput
     */
    secret: boolean;
}
/**
 * 
 * @export
 * @interface UpdateStackServiceRevisionsInput
 */
export interface UpdateStackServiceRevisionsInput {
    /**
     * Root stack services to advance, by their IDs in the published revision or the draft. Their derivatives advance with them. Omit or leave empty to advance every outdated service.
     * @type {Array<number>}
     * @memberof UpdateStackServiceRevisionsInput
     */
    stackServiceIds?: Array<number>;
}
/**
 * 
 * @export
 * @interface UpdateStackServiceTokenInput
 */
export interface UpdateStackServiceTokenInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateStackServiceTokenInput
     */
    value?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStackServiceTokenInput
     */
    secret: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateStackServiceTokenInput
     */
    regex?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateStackTokenInput
 */
export interface UpdateStackTokenInput {
    /**
     * 
     * @type {string}
     * @memberof UpdateStackTokenInput
     */
    value?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStackTokenInput
     */
    secret: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateStackTokenInput
     */
    regex?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateTitleRequest
 */
export interface UpdateTitleRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateTitleRequest
     */
    title: string;
}
/**
 * 
 * @export
 * @interface UpgradeIntegrationProviderRevisionInput
 */
export interface UpgradeIntegrationProviderRevisionInput {
    /**
     * Permanently deletes fields absent from the target revision when the preview allows it.
     * @type {boolean}
     * @memberof UpgradeIntegrationProviderRevisionInput
     */
    dropRemovedFields: boolean;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    name: string;
}
/**
 * 
 * @export
 * @interface ValidateAppAccessHostnameInput
 */
export interface ValidateAppAccessHostnameInput {
    /**
     * 
     * @type {Array<AppAccessSettingInput>}
     * @memberof ValidateAppAccessHostnameInput
     */
    settings?: Array<AppAccessSettingInput>;
    /**
     * 
     * @type {string}
     * @memberof ValidateAppAccessHostnameInput
     */
    host: string;
}
/**
 * 
 * @export
 * @interface ValidationResult
 */
export interface ValidationResult {
    /**
     * 
     * @type {boolean}
     * @memberof ValidationResult
     */
    valid: boolean;
}
/**
 * 
 * @export
 * @interface VerifyOrgSSODomainInput
 */
export interface VerifyOrgSSODomainInput {
    /**
     * 
     * @type {string}
     * @memberof VerifyOrgSSODomainInput
     */
    domain: string;
}
/**
 * 
 * @export
 * @interface VolumeSizeInput
 */
export interface VolumeSizeInput {
    /**
     * 
     * @type {string}
     * @memberof VolumeSizeInput
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof VolumeSizeInput
     */
    size: number;
    /**
     * 
     * @type {string}
     * @memberof VolumeSizeInput
     */
    storageClassName?: string | null;
}
/**
 * 
 * @export
 * @interface WodbyCloudMachineType
 */
export interface WodbyCloudMachineType {
    /**
     * 
     * @type {string}
     * @memberof WodbyCloudMachineType
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof WodbyCloudMachineType
     */
    title: string;
    /**
     * 
     * @type {boolean}
     * @memberof WodbyCloudMachineType
     */
    sharedCpu: boolean;
    /**
     * 
     * @type {number}
     * @memberof WodbyCloudMachineType
     */
    priceHourly: number;
    /**
     * 
     * @type {number}
     * @memberof WodbyCloudMachineType
     */
    priceMonthly: number;
    /**
     * Node disk size in GB.
     * @type {number}
     * @memberof WodbyCloudMachineType
     */
    disk: number;
}
/**
 * 
 * @export
 * @interface Workspace
 */
export interface Workspace {
    /**
     * 
     * @type {number}
     * @memberof Workspace
     */
    ownerUserId: number;
    /**
     * 
     * @type {number}
     * @memberof Workspace
     */
    sourceAppServiceId: number;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    runnerState: string;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    preparationState: string;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    accessError: string;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    baseRef: string;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    branch: string;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    initialCommit: string;
    /**
     * 
     * @type {boolean}
     * @memberof Workspace
     */
    initialized: boolean;
    /**
     * 
     * @type {string}
     * @memberof Workspace
     */
    error: string;
    /**
     * 
     * @type {number}
     * @memberof Workspace
     */
    taskId: number;
}
/**
 * 
 * @export
 * @interface WorkspaceConnection
 */
export interface WorkspaceConnection {
    /**
     * 
     * @type {boolean}
     * @memberof WorkspaceConnection
     */
    ready: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceConnection
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceConnection
     */
    host: string;
    /**
     * 
     * @type {number}
     * @memberof WorkspaceConnection
     */
    port: number;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceConnection
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceConnection
     */
    workingDirectory: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceConnection
     */
    hostKeyFingerprint: string;
    /**
     * Coding agent commands pre-installed in the SSH runner, such as claude, codex and opencode. Empty when the runner has none.
     * @type {Array<string>}
     * @memberof WorkspaceConnection
     */
    agents: Array<string>;
    /**
     * True when git push and fetch in the SSH runner authenticate to the app's repository with the app's Git integration.
     * @type {boolean}
     * @memberof WorkspaceConnection
     */
    gitCredentials: boolean;
    /**
     * True when opencode in the SSH runner uses the organization's AI credits by default.
     * @type {boolean}
     * @memberof WorkspaceConnection
     */
    aiCredits: boolean;
}
/**
 * 
 * @export
 * @interface WorkspaceEligibility200Response
 */
export interface WorkspaceEligibility200Response {
    /**
     * 
     * @type {boolean}
     * @memberof WorkspaceEligibility200Response
     */
    eligible?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof WorkspaceEligibility200Response
     */
    reasons?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof WorkspaceEligibility200Response
     */
    sourceStackServiceId?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof WorkspaceEligibility200Response
     */
    consumerStackServiceIds?: Array<number>;
}
/**
 * 
 * @export
 * @interface WorkspaceEligibilityRequest
 */
export interface WorkspaceEligibilityRequest {
    /**
     * 
     * @type {number}
     * @memberof WorkspaceEligibilityRequest
     */
    stackRevId: number;
    /**
     * 
     * @type {number}
     * @memberof WorkspaceEligibilityRequest
     */
    clusterId?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof WorkspaceEligibilityRequest
     */
    disabledServiceIds: Array<number>;
}
/**
 * 
 * @export
 * @interface WorkspaceGitChange
 */
export interface WorkspaceGitChange {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceGitChange
     */
    path: string;
    /**
     * Previous path of a renamed or copied file.
     * @type {string}
     * @memberof WorkspaceGitChange
     */
    originalPath?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceGitChange
     */
    kind: WorkspaceGitChangeKindEnum;
    /**
     * The index differs from HEAD for this path.
     * @type {boolean}
     * @memberof WorkspaceGitChange
     */
    staged: boolean;
    /**
     * The working tree differs from the index for this path.
     * @type {boolean}
     * @memberof WorkspaceGitChange
     */
    unstaged: boolean;
}


/**
 * @export
 */
export const WorkspaceGitChangeKindEnum = {
    Modified: 'modified',
    Added: 'added',
    Deleted: 'deleted',
    Renamed: 'renamed',
    Copied: 'copied',
    TypeChanged: 'type_changed',
    Untracked: 'untracked',
    Conflicted: 'conflicted'
} as const;
export type WorkspaceGitChangeKindEnum = typeof WorkspaceGitChangeKindEnum[keyof typeof WorkspaceGitChangeKindEnum];

/**
 * 
 * @export
 * @interface WorkspaceGitDiff
 */
export interface WorkspaceGitDiff {
    /**
     * False when the diff cannot be read; reason explains why and diff is empty.
     * @type {boolean}
     * @memberof WorkspaceGitDiff
     */
    available: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceGitDiff
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceGitDiff
     */
    path: string;
    /**
     * Unified diff of staged and unstaged changes. Empty when the file does not differ.
     * @type {string}
     * @memberof WorkspaceGitDiff
     */
    diff: string;
    /**
     * True for a file Git does not show line by line.
     * @type {boolean}
     * @memberof WorkspaceGitDiff
     */
    binary: boolean;
    /**
     * True when the diff is longer than what is returned.
     * @type {boolean}
     * @memberof WorkspaceGitDiff
     */
    truncated: boolean;
}
/**
 * 
 * @export
 * @interface WorkspaceGitStatus
 */
export interface WorkspaceGitStatus {
    /**
     * False when the state cannot be read; reason explains why and the other fields are omitted.
     * @type {boolean}
     * @memberof WorkspaceGitStatus
     */
    available: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceGitStatus
     */
    reason?: string;
    /**
     * Current branch; omitted for a detached HEAD.
     * @type {string}
     * @memberof WorkspaceGitStatus
     */
    branch?: string;
    /**
     * Upstream branch that the current branch tracks.
     * @type {string}
     * @memberof WorkspaceGitStatus
     */
    upstream?: string;
    /**
     * Commits on the current branch that its upstream does not have.
     * @type {number}
     * @memberof WorkspaceGitStatus
     */
    ahead?: number;
    /**
     * Commits on the upstream that the current branch does not have.
     * @type {number}
     * @memberof WorkspaceGitStatus
     */
    behind?: number;
    /**
     * HEAD commit; omitted before the first commit.
     * @type {string}
     * @memberof WorkspaceGitStatus
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceGitStatus
     */
    commitSubject?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceGitStatus
     */
    committedAt?: string;
    /**
     * Uncommitted changes, including untracked files.
     * @type {Array<WorkspaceGitChange>}
     * @memberof WorkspaceGitStatus
     */
    changes: Array<WorkspaceGitChange>;
    /**
     * True when more changes exist than listed.
     * @type {boolean}
     * @memberof WorkspaceGitStatus
     */
    truncated: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceGitStatus
     */
    checkedAt: string;
}
/**
 * 
 * @export
 * @interface WorkspacePullInput
 */
export interface WorkspacePullInput {
    /**
     * Run the environment's post-deployment scripts after the pull.
     * @type {boolean}
     * @memberof WorkspacePullInput
     */
    scripts?: boolean;
}
