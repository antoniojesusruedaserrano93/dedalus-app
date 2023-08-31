export interface HistoryService {
    resourceType: string;
    id:           string;
    meta:         HistoryServiceMeta;
    type:         string;
    total:        number;
    link:         Link[];
    entry:        Entry[];
}

export interface Entry {
    fullUrl:  string;
    resource: Resource;
    request:  Request;
    response: Response;
}

export interface Request {
    method: string;
    url:    string;
}

export interface Resource {
    resourceType: string;
    id:           string;
    meta:         ResourceMeta;
    text:         Text;
    identifier:   Identifier[];
    name:         Name[];
    birthDate?:   Date;
}

export interface Identifier {
    type:  Type;
    value: string;
}

export interface Type {
    coding: Coding[];
}

export interface Coding {
    system: string;
    code:   string;
}

export interface ResourceMeta {
    versionId:   string;
    lastUpdated: Date;
    source:      string;
}

export interface Name {
    family: string;
    given:  string[];
}

export interface Text {
    status: string;
    div:    string;
}

export interface Response {
    status: string;
    etag:   string;
}

export interface Link {
    relation: string;
    url:      string;
}

export interface HistoryServiceMeta {
    lastUpdated: Date;
}
