DROP EXTENSION IF EXISTS "uuid-ossp" CASCADE;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS projects
(
    id          uuid                  DEFAULT uuid_generate_v4(),
    title       varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    image       varchar(255),
    created_at  timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);