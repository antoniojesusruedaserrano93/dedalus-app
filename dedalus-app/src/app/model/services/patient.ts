export interface GetPatientList {
    resourceType: string;
    id:           string;
    meta:         GetPatientListMeta;
    type:         string;
    link:         Link[];
    entry:        Entry[];
}

export interface Entry {
    fullUrl:  string;
    resource: Resource;
    search:   Search;
}

export interface Resource {
    resourceType: ResourceType;
    id:           string;
    meta:         ResourceMeta;
    text:         Text;
    identifier?:  Identifier[];
    name:         Name[];
    gender?:      string;
    birthDate?:   Date;
    address?:     Address[];
    telecom?:     Telecom[];
    contact?:     Contact[];
}

export interface Address {
    city:        string;
    district?:   string;
    state:       string;
    use?:        string;
    line?:       string[];
    postalCode?: string;
    country?:    string;
}

export interface Contact {
    relationship: Relationship[];
    name:         Name;
    telecom?:     Telecom[];
}

export interface Name {
    use?:   string;
    family: string;
    given?: string[];
}

export interface Relationship {
    id:   string;
    text: string;
}

export interface Telecom {
    system: string;
    value:  string;
    use?:   string;
}

export interface Identifier {
    type?:   Type;
    value:   string;
    system?: string;
}

export interface Type {
    coding: Coding[];
}

export interface Coding {
    system: string;
    code:   Code;
}

export enum Code {
    Mr = "MR",
}

export interface ResourceMeta {
    versionId:   string;
    lastUpdated: Date;
    source:      string;
}

export enum ResourceType {
    Patient = "Patient",
}

export interface Text {
    status: Status;
    div:    string;
}

export enum Status {
    Generated = "generated",
}

export interface Search {
    mode: Mode;
}

export enum Mode {
    Match = "match",
}

export interface Link {
    relation: string;
    url:      string;
}

export interface GetPatientListMeta {
    lastUpdated: Date;
}
