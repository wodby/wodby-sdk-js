/* tslint:disable */
/* eslint-disable */
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
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    updatedAt: string;
}
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
     * @type {number}
     * @memberof AppAuth
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
     * 
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
     * 
     * @type {string}
     * @memberof AppDeployment
     */
    status: string;
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
 * @interface AppInstance
 */
export interface AppInstance {
    /**
     * 
     * @type {number}
     * @memberof AppInstance
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppInstance
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppInstance
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof AppInstance
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof AppInstance
     */
    mainDomain?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AppInstance
     */
    appId: number;
    /**
     * 
     * @type {number}
     * @memberof AppInstance
     */
    clusterId: number;
    /**
     * 
     * @type {number}
     * @memberof AppInstance
     */
    envId: number;
    /**
     * 
     * @type {number}
     * @memberof AppInstance
     */
    stackId: number;
    /**
     * 
     * @type {number}
     * @memberof AppInstance
     */
    stackRevId: number;
    /**
     * 
     * @type {string}
     * @memberof AppInstance
     */
    stackName: string;
    /**
     * 
     * @type {string}
     * @memberof AppInstance
     */
    stackTitle: string;
    /**
     * 
     * @type {string}
     * @memberof AppInstance
     */
    stackIcon: string;
    /**
     * 
     * @type {number}
     * @memberof AppInstance
     */
    stackRevNumber: number;
    /**
     * 
     * @type {string}
     * @memberof AppInstance
     */
    stackVersion: string;
    /**
     * 
     * @type {AppInstanceSettings}
     * @memberof AppInstance
     */
    settings?: AppInstanceSettings;
    /**
     * 
     * @type {AppInstanceHealth}
     * @memberof AppInstance
     */
    health: AppInstanceHealth;
    /**
     * 
     * @type {string}
     * @memberof AppInstance
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppInstance
     */
    updatedAt: string;
}
/**
 * 
 * @export
 * @interface AppInstanceAutoStackUpgradeSettings
 */
export interface AppInstanceAutoStackUpgradeSettings {
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceAutoStackUpgradeSettings
     */
    enabled: boolean;
    /**
     * 
     * @type {AppInstanceStackUpgradeSettings}
     * @memberof AppInstanceAutoStackUpgradeSettings
     */
    upgradeSettings?: AppInstanceStackUpgradeSettings;
}
/**
 * 
 * @export
 * @interface AppInstanceAutoStackUpgradeSettingsInput
 */
export interface AppInstanceAutoStackUpgradeSettingsInput {
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceAutoStackUpgradeSettingsInput
     */
    enabled: boolean;
    /**
     * 
     * @type {AppInstanceStackUpgradeSettingsInput}
     * @memberof AppInstanceAutoStackUpgradeSettingsInput
     */
    upgradeSettings?: AppInstanceStackUpgradeSettingsInput;
}
/**
 * 
 * @export
 * @interface AppInstanceBackupHealth
 */
export interface AppInstanceBackupHealth {
    /**
     * 
     * @type {number}
     * @memberof AppInstanceBackupHealth
     */
    failingSchedulesCount: number;
    /**
     * 
     * @type {string}
     * @memberof AppInstanceBackupHealth
     */
    latestFailureAt?: string | null;
}
/**
 * 
 * @export
 * @interface AppInstanceCronHealth
 */
export interface AppInstanceCronHealth {
    /**
     * 
     * @type {number}
     * @memberof AppInstanceCronHealth
     */
    failingSchedulesCount: number;
    /**
     * 
     * @type {string}
     * @memberof AppInstanceCronHealth
     */
    latestFailureAt?: string | null;
}
/**
 * 
 * @export
 * @interface AppInstanceHealth
 */
export interface AppInstanceHealth {
    /**
     * 
     * @type {AppInstanceCronHealth}
     * @memberof AppInstanceHealth
     */
    cron: AppInstanceCronHealth;
    /**
     * 
     * @type {AppInstanceBackupHealth}
     * @memberof AppInstanceHealth
     */
    backups: AppInstanceBackupHealth;
}
/**
 * 
 * @export
 * @interface AppInstanceSettings
 */
export interface AppInstanceSettings {
    /**
     * 
     * @type {AppInstanceAutoStackUpgradeSettings}
     * @memberof AppInstanceSettings
     */
    autoStackUpgrade?: AppInstanceAutoStackUpgradeSettings;
}
/**
 * 
 * @export
 * @interface AppInstanceSettingsInput
 */
export interface AppInstanceSettingsInput {
    /**
     * 
     * @type {AppInstanceAutoStackUpgradeSettingsInput}
     * @memberof AppInstanceSettingsInput
     */
    autoStackUpgrade?: AppInstanceAutoStackUpgradeSettingsInput;
}
/**
 * 
 * @export
 * @interface AppInstanceStackUpgradeInput
 */
export interface AppInstanceStackUpgradeInput {
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    versions: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    replicas: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    resources: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    integrations: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    services: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    settings: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    links: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    tokens: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    configs: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    cron: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    volumes: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeInput
     */
    main: boolean;
}
/**
 * 
 * @export
 * @interface AppInstanceStackUpgradeSettings
 */
export interface AppInstanceStackUpgradeSettings {
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    versions: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    replicas: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    resources: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    integrations: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    services: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    settings: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    links: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    tokens: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    configs: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    cron: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    volumes: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettings
     */
    main: boolean;
}
/**
 * 
 * @export
 * @interface AppInstanceStackUpgradeSettingsInput
 */
export interface AppInstanceStackUpgradeSettingsInput {
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    versions?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    replicas?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    resources?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    integrations?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    services?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    settings?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    links?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    tokens?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    configs?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    cron?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
     */
    volumes?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppInstanceStackUpgradeSettingsInput
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
 */
export const AppRouteSettingName = {
    HttpsRedirect: 'HTTPS_REDIRECT',
    NoIndex: 'NO_INDEX',
    RequestBodySize: 'REQUEST_BODY_SIZE',
    SessionAffinity: 'SESSION_AFFINITY',
    PathRewrite: 'PATH_REWRITE'
} as const;
export type AppRouteSettingName = typeof AppRouteSettingName[keyof typeof AppRouteSettingName];

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
     * @type {boolean}
     * @memberof AppService
     */
    configurationReady: boolean;
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
     * 
     * @type {Array<AppServiceBuildArg>}
     * @memberof AppServiceBuildConfig
     */
    args?: Array<AppServiceBuildArg> | null;
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
 * @interface AppServiceContainer
 */
export interface AppServiceContainer {
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
     * @type {string}
     * @memberof Cert
     */
    issuer: string;
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
     * 
     * @type {number}
     * @memberof Cluster
     */
    orgId: number;
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
 * @interface ClusterSettings
 */
export interface ClusterSettings {
    /**
     * 
     * @type {ClusterAutoInfrastructureUpgradeSettings}
     * @memberof ClusterSettings
     */
    autoInfrastructureUpgrade?: ClusterAutoInfrastructureUpgradeSettings;
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
 * @interface CreateEnvRequest
 */
export interface CreateEnvRequest {
    /**
     * Optional for API-key requests; defaults to the API key's organization.
     * @type {number}
     * @memberof CreateEnvRequest
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateEnvRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEnvRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEnvRequest
     */
    type: string;
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
     * 
     * @type {number}
     * @memberof Database
     */
    envId: number;
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
     * 
     * @type {CopyStackSettingsInput}
     * @memberof DuplicateStackRequest
     */
    settings?: CopyStackSettingsInput;
}
/**
 * 
 * @export
 * @interface Env
 */
export interface Env {
    /**
     * 
     * @type {number}
     * @memberof Env
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Env
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Env
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Env
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof Env
     */
    orgId: number;
    /**
     * 
     * @type {string}
     * @memberof Env
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof Env
     */
    updatedAt: string;
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
    name: string;
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
     * Optional service scope. Required together with appRouteId for route scope.
     * @type {number}
     * @memberof NewAppAuthInput
     */
    appServiceId?: number | null;
    /**
     * Optional route scope. Requires appServiceId and must belong to that service.
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
 * @interface NewAppInput
 */
export interface NewAppInput {
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
     * 
     * @type {string}
     * @memberof NewAppInput
     */
    instanceName: string;
    /**
     * Defaults to instanceName when omitted.
     * @type {string}
     * @memberof NewAppInput
     */
    instanceTitle?: string;
    /**
     * Defaults to instanceName.name.orgDomain when omitted.
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
     * 
     * @type {number}
     * @memberof NewAppInput
     */
    clusterId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewAppInput
     */
    envId: number;
    /**
     * 
     * @type {number}
     * @memberof NewAppInput
     */
    ciIntegrationId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewAppInput
     */
    registryIntegrationId?: number | null;
    /**
     * 
     * @type {AppInstanceSettingsInput}
     * @memberof NewAppInput
     */
    settings?: AppInstanceSettingsInput;
}
/**
 * 
 * @export
 * @interface NewAppInstanceInput
 */
export interface NewAppInstanceInput {
    /**
     * 
     * @type {number}
     * @memberof NewAppInstanceInput
     */
    appId: number;
    /**
     * 
     * @type {string}
     * @memberof NewAppInstanceInput
     */
    instanceName: string;
    /**
     * Defaults to instanceName when omitted.
     * @type {string}
     * @memberof NewAppInstanceInput
     */
    instanceTitle?: string;
    /**
     * Defaults to instanceName.appName.orgDomain when omitted.
     * @type {string}
     * @memberof NewAppInstanceInput
     */
    domain?: string;
    /**
     * 
     * @type {number}
     * @memberof NewAppInstanceInput
     */
    stackRevId: number;
    /**
     * Defaults to the stack revision's service defaults when omitted.
     * @type {Array<NewAppServiceInput>}
     * @memberof NewAppInstanceInput
     */
    services?: Array<NewAppServiceInput>;
    /**
     * 
     * @type {number}
     * @memberof NewAppInstanceInput
     */
    clusterId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewAppInstanceInput
     */
    envId: number;
    /**
     * 
     * @type {number}
     * @memberof NewAppInstanceInput
     */
    ciIntegrationId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof NewAppInstanceInput
     */
    registryIntegrationId?: number | null;
    /**
     * 
     * @type {AppInstanceSettingsInput}
     * @memberof NewAppInstanceInput
     */
    settings?: AppInstanceSettingsInput;
}
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
     * 
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
     * 
     * @type {boolean}
     * @memberof NewAppRouteInput
     */
    letsencrypt?: boolean | null;
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
     * 
     * @type {string}
     * @memberof NewBackupInput
     */
    backupName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof NewBackupInput
     */
    integrationId: number;
    /**
     * 
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
}
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
     * @type {string}
     * @memberof NewBackupPresetInput
     */
    backupName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof NewBackupPresetInput
     */
    integrationId: number;
    /**
     * 
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
     * @type {number}
     * @memberof NewBackupPresetInput
     */
    duration?: number | null;
}
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
 * 
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
     */
    envId: number;
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
    name: string;
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
     * @type {string}
     * @memberof ProviderRevision
     */
    createdAt: string;
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
 * @interface ResourcesInput
 */
export interface ResourcesInput {
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
     * @type {{ [key: string]: any; }}
     * @memberof ServiceRevision
     */
    manifest?: { [key: string]: any; };
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
 * @interface ServiceSettings
 */
export interface ServiceSettings {
    /**
     * 
     * @type {GitAutoUpdateSettings}
     * @memberof ServiceSettings
     */
    gitAutoUpdate?: GitAutoUpdateSettings;
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
     * @type {string}
     * @memberof StackRevision
     */
    createdAt: string;
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
    clusterId?: number | null;
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
 * @interface UpdateAppAuthInput
 */
export interface UpdateAppAuthInput {
    /**
     * Omit with appRouteId to preserve the current scope. When supplied alone, moves the entry to service scope and clears any route scope.
     * @type {number}
     * @memberof UpdateAppAuthInput
     */
    appServiceId?: number | null;
    /**
     * Moves the entry to route scope and must be accompanied by appServiceId.
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
     * 
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
     * 
     * @type {number}
     * @memberof UpdateBackupPresetInput
     */
    integrationId: number;
    /**
     * 
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
     * @type {number}
     * @memberof UpdateBackupPresetInput
     */
    duration?: number | null;
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
 * @interface UpdateEnvRequest
 */
export interface UpdateEnvRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateEnvRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateEnvRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateEnvRequest
     */
    type: string;
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
     * @type {string}
     * @memberof UpdateIntegrationInput
     */
    name: string;
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
     * @type {number}
     * @memberof UpdateOrgRequest
     */
    registryIntegrationId?: number | null;
    /**
     * 
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
