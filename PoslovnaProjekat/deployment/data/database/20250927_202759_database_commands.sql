CREATE GLOBAL TEMPORARY TABLE "mendixsystem$temporary_ids" ( "id" BIGINT NOT NULL ) ON COMMIT DELETE ROWS;
CREATE TABLE "system$workflowendedusertaskoutcome" (
	"id" BIGINT NOT NULL,
	"outcome" VARCHAR_IGNORECASE(200) NULL,
	"time" TIMESTAMP NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('03c36ed6-7828-420c-9a27-23839d06215d', 'System.WorkflowEndedUserTaskOutcome', 'system$workflowendedusertaskoutcome', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('4423bf8d-4eab-44bd-ac71-cabf7350ac5b', '03c36ed6-7828-420c-9a27-23839d06215d', 'Outcome', 'outcome', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('fe10bf82-e238-4b71-8b9f-27f96f04c8e6', '03c36ed6-7828-420c-9a27-23839d06215d', 'Time', 'time', 20, 0, '', false);
CREATE TABLE "system$workflowendedusertask" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(2147483647) NULL,
	"description" VARCHAR_IGNORECASE(2147483647) NULL,
	"starttime" TIMESTAMP NULL,
	"duedate" TIMESTAMP NULL,
	"endtime" TIMESTAMP NULL,
	"outcome" VARCHAR_IGNORECASE(200) NULL,
	"state" VARCHAR_IGNORECASE(10) NULL,
	"completiontype" VARCHAR_IGNORECASE(9) NULL,
	"usertaskkey" VARCHAR_IGNORECASE(200) NULL,
	"error" VARCHAR_IGNORECASE(2147483647) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'System.WorkflowEndedUserTask', 'system$workflowendedusertask', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('328240c4-b920-4200-8e85-d6a420f1ceaa', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'Name', 'name', 30, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('285fe8e2-5369-4e24-8d40-c70785d55ef1', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'Description', 'description', 30, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6710c9b3-0288-46dd-a624-cea974366ea2', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'StartTime', 'starttime', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('088feb52-0ac7-4997-bf5b-7564aea4e44d', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'DueDate', 'duedate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('90e6130c-018f-4f21-b749-6b4c3f40e705', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'EndTime', 'endtime', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('08faf160-3940-4ee3-b95c-92cea1f231af', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'Outcome', 'outcome', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('480d214f-b588-4a45-99e6-7809c2da5762', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'State', 'state', 40, 10, 'Created', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('7a92c3a2-061c-4c59-baa3-0f5373880bb3', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'CompletionType', 'completiontype', 40, 9, 'Single', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('2cfe5222-30be-4047-ba8a-2fccc1ac495c', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'UserTaskKey', 'usertaskkey', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a0b2a84e-a652-419b-a75e-9e1f7f47bf0d', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'Error', 'error', 30, 0, '', false);
CREATE TABLE "system$workflowgroup" (
	"id" BIGINT NOT NULL,
	"name" VARCHAR_IGNORECASE(200) NULL,
	"description" VARCHAR_IGNORECASE(2147483647) NULL,
	"modelguid" VARCHAR_IGNORECASE(36) NULL,
	PRIMARY KEY("id"),
	CONSTRAINT "uniq_system$workflowgroup_name" UNIQUE ("name"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('7582d0f8-a963-4fde-8535-e1b257b388d6', 'System.WorkflowGroup', 'system$workflowgroup', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('28d9ed06-e6fd-4cba-b6a9-4f9e47fece63', '7582d0f8-a963-4fde-8535-e1b257b388d6', 'Name', 'name', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('41b5b84e-50fb-4851-a59a-272834dbf4c3', '7582d0f8-a963-4fde-8535-e1b257b388d6', 'Description', 'description', 30, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('898f9984-f489-4e01-9fbe-4df29cba7ce5', '7582d0f8-a963-4fde-8535-e1b257b388d6', 'ModelGUID', 'modelguid', 30, 36, '', false);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_system$workflowgroup_name', '7582d0f8-a963-4fde-8535-e1b257b388d6', '28d9ed06-e6fd-4cba-b6a9-4f9e47fece63');
CREATE TABLE "system$workflowendedusertaskoutcome_workflowendedusertask" (
	"system$workflowendedusertaskoutcomeid" BIGINT NOT NULL,
	"system$workflowendedusertaskid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowendedusertaskoutcomeid","system$workflowendedusertaskid"),
	CONSTRAINT "uniq_system$workflowendedusertaskoutcome_workflowendedusertask_system$workflowendedusertaskoutcomeid" UNIQUE ("system$workflowendedusertaskoutcomeid"),
	CONSTRAINT "frn_system$workflowendedusertaskoutcome_workflowendedusertask_system$workflowendedusertaskoutcomeid" FOREIGN KEY ( "system$workflowendedusertaskoutcomeid" ) REFERENCES "system$workflowendedusertaskoutcome" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_system$workflowendedusertaskoutcome_workflowendedusertask_system$workflowendedusertaskid" FOREIGN KEY ( "system$workflowendedusertaskid" ) REFERENCES "system$workflowendedusertask" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_system$workflowendedusertaskoutcome_workflowendedusertask_system$workflowendedusertask_system$workflowendedusertaskoutcome" ON "system$workflowendedusertaskoutcome_workflowendedusertask" ("system$workflowendedusertaskid" ASC,"system$workflowendedusertaskoutcomeid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('91790cd2-b8d9-4e3a-82be-504f4552d1d6', 'System.WorkflowEndedUserTaskOutcome_WorkflowEndedUserTask', 'system$workflowendedusertaskoutcome_workflowendedusertask', '03c36ed6-7828-420c-9a27-23839d06215d', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'system$workflowendedusertaskoutcomeid', 'system$workflowendedusertaskid', 'idx_system$workflowendedusertaskoutcome_workflowendedusertask_system$workflowendedusertask_system$workflowendedusertaskoutcome', 'frn_system$workflowendedusertaskoutcome_workflowendedusertask_system$workflowendedusertaskoutcomeid', 'frn_system$workflowendedusertaskoutcome_workflowendedusertask_system$workflowendedusertaskid', 0, 0, 2);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_system$workflowendedusertaskoutcome_workflowendedusertask_system$workflowendedusertaskoutcomeid', '91790cd2-b8d9-4e3a-82be-504f4552d1d6', '1b4998f8-5aed-36c2-94c7-81f202cc6225');
CREATE TABLE "system$workflowendedusertaskoutcome_user" (
	"system$workflowendedusertaskoutcomeid" BIGINT NOT NULL,
	"system$userid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowendedusertaskoutcomeid","system$userid"),
	CONSTRAINT "uniq_system$workflowendedusertaskoutcome_user_system$workflowendedusertaskoutcomeid" UNIQUE ("system$workflowendedusertaskoutcomeid"),
	CONSTRAINT "frn_system$workflowendedusertaskoutcome_user_system$workflowendedusertaskoutcomeid" FOREIGN KEY ( "system$workflowendedusertaskoutcomeid" ) REFERENCES "system$workflowendedusertaskoutcome" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_system$workflowendedusertaskoutcome_user_system$userid" FOREIGN KEY ( "system$userid" ) REFERENCES "system$user" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_system$workflowendedusertaskoutcome_user_system$user_system$workflowendedusertaskoutcome" ON "system$workflowendedusertaskoutcome_user" ("system$userid" ASC,"system$workflowendedusertaskoutcomeid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('116d625c-39af-4c3b-b723-7b990b8d4336', 'System.WorkflowEndedUserTaskOutcome_User', 'system$workflowendedusertaskoutcome_user', '03c36ed6-7828-420c-9a27-23839d06215d', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'system$workflowendedusertaskoutcomeid', 'system$userid', 'idx_system$workflowendedusertaskoutcome_user_system$user_system$workflowendedusertaskoutcome', 'frn_system$workflowendedusertaskoutcome_user_system$workflowendedusertaskoutcomeid', 'frn_system$workflowendedusertaskoutcome_user_system$userid', 0, 0, 2);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_system$workflowendedusertaskoutcome_user_system$workflowendedusertaskoutcomeid', '116d625c-39af-4c3b-b723-7b990b8d4336', '1954a632-5f15-3c9f-a755-f78a51ec01ac');
CREATE TABLE "system$workflowendedusertask_targetgroups" (
	"system$workflowendedusertaskid" BIGINT NOT NULL,
	"system$workflowgroupid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowendedusertaskid","system$workflowgroupid"),
	CONSTRAINT "frn_system$workflowendedusertask_targetgroups_system$workflowendedusertaskid" FOREIGN KEY ( "system$workflowendedusertaskid" ) REFERENCES "system$workflowendedusertask" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_system$workflowendedusertask_targetgroups_system$workflowgroupid" FOREIGN KEY ( "system$workflowgroupid" ) REFERENCES "system$workflowgroup" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_system$workflowendedusertask_targetgroups_system$workflowgroup_system$workflowendedusertask" ON "system$workflowendedusertask_targetgroups" ("system$workflowgroupid" ASC,"system$workflowendedusertaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('c19b560c-e552-40aa-b57e-c24596c097fc', 'System.WorkflowEndedUserTask_TargetGroups', 'system$workflowendedusertask_targetgroups', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', '7582d0f8-a963-4fde-8535-e1b257b388d6', 'system$workflowendedusertaskid', 'system$workflowgroupid', 'idx_system$workflowendedusertask_targetgroups_system$workflowgroup_system$workflowendedusertask', 'frn_system$workflowendedusertask_targetgroups_system$workflowendedusertaskid', 'frn_system$workflowendedusertask_targetgroups_system$workflowgroupid', 0, 0, 2);
CREATE TABLE "system$workflowendedusertask_targetusers" (
	"system$workflowendedusertaskid" BIGINT NOT NULL,
	"system$userid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowendedusertaskid","system$userid"),
	CONSTRAINT "frn_system$workflowendedusertask_targetusers_system$workflowendedusertaskid" FOREIGN KEY ( "system$workflowendedusertaskid" ) REFERENCES "system$workflowendedusertask" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_system$workflowendedusertask_targetusers_system$userid" FOREIGN KEY ( "system$userid" ) REFERENCES "system$user" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_system$workflowendedusertask_targetusers_system$user_system$workflowendedusertask" ON "system$workflowendedusertask_targetusers" ("system$userid" ASC,"system$workflowendedusertaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('42883174-f6d5-47e3-9094-ee0b197328ab', 'System.WorkflowEndedUserTask_TargetUsers', 'system$workflowendedusertask_targetusers', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'system$workflowendedusertaskid', 'system$userid', 'idx_system$workflowendedusertask_targetusers_system$user_system$workflowendedusertask', 'frn_system$workflowendedusertask_targetusers_system$workflowendedusertaskid', 'frn_system$workflowendedusertask_targetusers_system$userid', 0, 0, 2);
CREATE TABLE "system$workflowendedusertask_workflowusertaskdefinition" (
	"system$workflowendedusertaskid" BIGINT NOT NULL,
	"system$workflowusertaskdefinitionid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowendedusertaskid","system$workflowusertaskdefinitionid"),
	CONSTRAINT "uniq_system$workflowendedusertask_workflowusertaskdefinition_system$workflowendedusertaskid" UNIQUE ("system$workflowendedusertaskid"),
	CONSTRAINT "frn_system$workflowendedusertask_workflowusertaskdefinition_system$workflowendedusertaskid" FOREIGN KEY ( "system$workflowendedusertaskid" ) REFERENCES "system$workflowendedusertask" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_system$workflowendedusertask_workflowusertaskdefinition_system$workflowusertaskdefinitionid" FOREIGN KEY ( "system$workflowusertaskdefinitionid" ) REFERENCES "system$workflowusertaskdefinition" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_system$workflowendedusertask_workflowusertaskdefinition_system$workflowusertaskdefinition_system$workflowendedusertask" ON "system$workflowendedusertask_workflowusertaskdefinition" ("system$workflowusertaskdefinitionid" ASC,"system$workflowendedusertaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('ea83a1f9-f686-4c16-8146-ff386d4f62a8', 'System.WorkflowEndedUserTask_WorkflowUserTaskDefinition', 'system$workflowendedusertask_workflowusertaskdefinition', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', 'e09e866f-288b-475c-9465-792cde8b878c', 'system$workflowendedusertaskid', 'system$workflowusertaskdefinitionid', 'idx_system$workflowendedusertask_workflowusertaskdefinition_system$workflowusertaskdefinition_system$workflowendedusertask', 'frn_system$workflowendedusertask_workflowusertaskdefinition_system$workflowendedusertaskid', 'frn_system$workflowendedusertask_workflowusertaskdefinition_system$workflowusertaskdefinitionid', 0, 0, 2);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_system$workflowendedusertask_workflowusertaskdefinition_system$workflowendedusertaskid', 'ea83a1f9-f686-4c16-8146-ff386d4f62a8', '7ba49166-d9e2-3612-b7d4-3e0004d203dd');
CREATE TABLE "system$workflowendedusertask_workflow" (
	"system$workflowendedusertaskid" BIGINT NOT NULL,
	"system$workflowid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowendedusertaskid","system$workflowid"),
	CONSTRAINT "uniq_system$workflowendedusertask_workflow_system$workflowendedusertaskid" UNIQUE ("system$workflowendedusertaskid"),
	CONSTRAINT "frn_system$workflowendedusertask_workflow_system$workflowendedusertaskid" FOREIGN KEY ( "system$workflowendedusertaskid" ) REFERENCES "system$workflowendedusertask" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_system$workflowendedusertask_workflow_system$workflowid" FOREIGN KEY ( "system$workflowid" ) REFERENCES "system$workflow" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_system$workflowendedusertask_workflow_system$workflow_system$workflowendedusertask" ON "system$workflowendedusertask_workflow" ("system$workflowid" ASC,"system$workflowendedusertaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('e1fad91f-3bf8-4a02-88f9-4a2316c7d840', 'System.WorkflowEndedUserTask_Workflow', 'system$workflowendedusertask_workflow', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', '2ae37bf5-ecb8-4c55-b967-d7383925b208', 'system$workflowendedusertaskid', 'system$workflowid', 'idx_system$workflowendedusertask_workflow_system$workflow_system$workflowendedusertask', 'frn_system$workflowendedusertask_workflow_system$workflowendedusertaskid', 'frn_system$workflowendedusertask_workflow_system$workflowid', 0, 0, 2);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_system$workflowendedusertask_workflow_system$workflowendedusertaskid', 'e1fad91f-3bf8-4a02-88f9-4a2316c7d840', '19cf3bd4-c27c-319c-9329-9095669c4b4f');
CREATE TABLE "system$workflowendedusertask_assignees" (
	"system$workflowendedusertaskid" BIGINT NOT NULL,
	"system$userid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowendedusertaskid","system$userid"),
	CONSTRAINT "frn_system$workflowendedusertask_assignees_system$workflowendedusertaskid" FOREIGN KEY ( "system$workflowendedusertaskid" ) REFERENCES "system$workflowendedusertask" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_system$workflowendedusertask_assignees_system$userid" FOREIGN KEY ( "system$userid" ) REFERENCES "system$user" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_system$workflowendedusertask_assignees_system$user_system$workflowendedusertask" ON "system$workflowendedusertask_assignees" ("system$userid" ASC,"system$workflowendedusertaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('a7f1e558-d129-4adb-b5b4-dbb4853056f2', 'System.WorkflowEndedUserTask_Assignees', 'system$workflowendedusertask_assignees', '2e12231f-c3b1-4b7c-bc42-d82c778a62a4', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'system$workflowendedusertaskid', 'system$userid', 'idx_system$workflowendedusertask_assignees_system$user_system$workflowendedusertask', 'frn_system$workflowendedusertask_assignees_system$workflowendedusertaskid', 'frn_system$workflowendedusertask_assignees_system$userid', 0, 0, 2);
CREATE TABLE "system$workflowusertask_targetgroups" (
	"system$workflowusertaskid" BIGINT NOT NULL,
	"system$workflowgroupid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowusertaskid","system$workflowgroupid"),
	CONSTRAINT "frn_system$workflowusertask_targetgroups_system$workflowusertaskid" FOREIGN KEY ( "system$workflowusertaskid" ) REFERENCES "system$workflowusertask" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_system$workflowusertask_targetgroups_system$workflowgroupid" FOREIGN KEY ( "system$workflowgroupid" ) REFERENCES "system$workflowgroup" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_system$workflowusertask_targetgroups_system$workflowgroup_system$workflowusertask" ON "system$workflowusertask_targetgroups" ("system$workflowgroupid" ASC,"system$workflowusertaskid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('3b215944-42bb-4113-bfb4-58b1f7b34460', 'System.WorkflowUserTask_TargetGroups', 'system$workflowusertask_targetgroups', '3729d27c-735b-457a-b210-9dffb125c3f3', '7582d0f8-a963-4fde-8535-e1b257b388d6', 'system$workflowusertaskid', 'system$workflowgroupid', 'idx_system$workflowusertask_targetgroups_system$workflowgroup_system$workflowusertask', 'frn_system$workflowusertask_targetgroups_system$workflowusertaskid', 'frn_system$workflowusertask_targetgroups_system$workflowgroupid', 0, 0, 2);
CREATE TABLE "system$workflowgroup_user" (
	"system$workflowgroupid" BIGINT NOT NULL,
	"system$userid" BIGINT NOT NULL,
	PRIMARY KEY("system$workflowgroupid","system$userid"),
	CONSTRAINT "frn_system$workflowgroup_user_system$workflowgroupid" FOREIGN KEY ( "system$workflowgroupid" ) REFERENCES "system$workflowgroup" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_system$workflowgroup_user_system$userid" FOREIGN KEY ( "system$userid" ) REFERENCES "system$user" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_system$workflowgroup_user_system$user_system$workflowgroup" ON "system$workflowgroup_user" ("system$userid" ASC,"system$workflowgroupid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('c407f399-7e6c-4c2d-9b8d-1d24855f031b', 'System.WorkflowGroup_User', 'system$workflowgroup_user', '7582d0f8-a963-4fde-8535-e1b257b388d6', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'system$workflowgroupid', 'system$userid', 'idx_system$workflowgroup_user_system$user_system$workflowgroup', 'frn_system$workflowgroup_user_system$workflowgroupid', 'frn_system$workflowgroup_user_system$userid', 0, 0, 2);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20250927 20:27:59';
