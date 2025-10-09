ALTER TABLE "myfirstmodule$robnakartica" ADD "rezervisanakolicina" DECIMAL(28, 8) NULL;
UPDATE "myfirstmodule$robnakartica" SET "rezervisanakolicina" = 0;
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('2ae4f69e-b62e-4c28-a330-6f3b815bd159', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'rezervisanaKolicina', 'rezervisanakolicina', 5, 0, '0', false);
ALTER TABLE "prodaja$izlaznafaktura" ADD "prodaja$izlaznafaktura_preduzece" BIGINT NULL;
ALTER TABLE "prodaja$izlaznafaktura" ADD "datumvalute" TIMESTAMP NULL;
ALTER TABLE "prodaja$izlaznafaktura" ADD "ukupanpdv" DECIMAL(28, 8) NULL;
UPDATE "prodaja$izlaznafaktura" SET "ukupanpdv" = 0;
ALTER TABLE "prodaja$izlaznafaktura" ADD "ukupnaosnovica" DECIMAL(28, 8) NULL;
UPDATE "prodaja$izlaznafaktura" SET "ukupnaosnovica" = 0;
ALTER TABLE "prodaja$izlaznafaktura" ADD "preostaliiznos" DECIMAL(28, 8) NULL;
UPDATE "prodaja$izlaznafaktura" SET "preostaliiznos" = 0;
ALTER TABLE "prodaja$izlaznafaktura" ADD "vrstadokumenta" VARCHAR_IGNORECASE(10) NULL;
ALTER TABLE "prodaja$izlaznafaktura" ADD "ukupnavrednost" DECIMAL(28, 8) NULL;
UPDATE "prodaja$izlaznafaktura" SET "ukupnavrednost" = 0;
ALTER TABLE "prodaja$izlaznafaktura" ADD "mestopreuzimanja" VARCHAR_IGNORECASE(200) NULL;
ALTER TABLE "prodaja$izlaznafaktura" ADD "racunzauplatu" VARCHAR_IGNORECASE(200) NULL;
ALTER TABLE "prodaja$izlaznafaktura" ADD "statusfakture" VARCHAR_IGNORECASE(15) NULL;
ALTER TABLE "prodaja$izlaznafaktura" ADD "brojfakture" INT NULL;
UPDATE "prodaja$izlaznafaktura" SET "brojfakture" = 0;
CREATE INDEX "idx_prodaja$izlaznafaktura_prodaja$izlaznafaktura_preduzece" ON "prodaja$izlaznafaktura" ("prodaja$izlaznafaktura_preduzece" ASC,"id" ASC);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('e36ff5de-8375-45d7-b3e2-20318ceebcd2', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'brojFakture', 'brojfakture', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('bde1f0e8-ff1a-4dc1-97a4-1327ee1f1200', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'datumValute', 'datumvalute', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('00c41c35-6a69-4186-8901-7707bd274ae8', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'ukupnaOsnovica', 'ukupnaosnovica', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('1631314f-dd12-47c5-aee0-e9a38eba3b1d', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'ukupanPDV', 'ukupanpdv', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('92145ade-3f7a-4556-a587-9d2e63467a3d', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'ukupnaVrednost', 'ukupnavrednost', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6b31e4d7-24d4-4925-8803-d4eead2a5d36', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'preostaliIznos', 'preostaliiznos', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('52235fdc-83a2-4c52-938e-a1bc0b4fc091', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'racunZaUplatu', 'racunzauplatu', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('7f6e54fc-4ba1-4a5b-b31e-3aa1678006bf', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'vrstaDokumenta', 'vrstadokumenta', 40, 10, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a9bc532b-feb5-47e8-b7db-d672adf463b4', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'statusFakture', 'statusfakture', 40, 15, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a2577df6-1a89-437d-9903-fa44f770eea3', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'mestoPreuzimanja', 'mestopreuzimanja', 30, 200, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('35ee3497-a2cd-3236-8873-915deac3b6e8', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'idx_prodaja$izlaznafaktura_prodaja$izlaznafaktura_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('35ee3497-a2cd-3236-8873-915deac3b6e8', '906fe6ef-7dd4-4ae3-a13e-74a1489e4a63', false, 0);
UPDATE "mendixsystem$association" SET "association_name" = 'Prodaja.IzlaznaFaktura_PoslovnaGodina', "table_name" = 'prodaja$izlaznafaktura', "parent_entity_id" = '9964805e-2a84-4c40-8ed1-34c7cc78539d', "child_entity_id" = '7a2371c6-62d4-404f-b08a-4e60cc8df1a8', "parent_column_name" = 'id', "child_column_name" = 'prodaja$izlaznafaktura_poslovnagodina', "pk_index_name" = NULL, "index_name" = NULL, "parent_fkc_name" = NULL, "child_fkc_name" = 'frn_prodaja$izlaznafaktura_prodaja$izlaznafaktura_poslovnagodina', "parent_fkc_action" = NULL, "child_fkc_action" = 2, "storage_format" = 1 WHERE "id" = 'ed75c0fa-6383-4e94-bebb-8d28fd13a4da';
UPDATE "mendixsystem$association" SET "association_name" = 'Prodaja.IzlaznaFaktura_PoslovniPartner', "table_name" = 'prodaja$izlaznafaktura', "parent_entity_id" = '9964805e-2a84-4c40-8ed1-34c7cc78539d', "child_entity_id" = '810e9e9b-6158-4c57-9d2a-b26e8a573215', "parent_column_name" = 'id', "child_column_name" = 'prodaja$izlaznafaktura_poslovnipartner', "pk_index_name" = NULL, "index_name" = NULL, "parent_fkc_name" = NULL, "child_fkc_name" = 'frn_prodaja$izlaznafaktura_prodaja$izlaznafaktura_poslovnipartner', "parent_fkc_action" = NULL, "child_fkc_action" = 2, "storage_format" = 1 WHERE "id" = 'c72ef6a0-843b-4f40-b288-cdcd975580c6';
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('906fe6ef-7dd4-4ae3-a13e-74a1489e4a63', 'Prodaja.IzlaznaFaktura_Preduzece', 'prodaja$izlaznafaktura', '9964805e-2a84-4c40-8ed1-34c7cc78539d', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'prodaja$izlaznafaktura_preduzece', 'frn_prodaja$izlaznafaktura_prodaja$izlaznafaktura_preduzece', 2, 1);
ALTER TABLE "myfirstmodule$robailiusluga" ADD "myfirstmodule$robailiusluga_kategorijarobe" BIGINT NULL;
CREATE INDEX "idx_myfirstmodule$robailiusluga_myfirstmodule$robailiusluga_kategorijarobe" ON "myfirstmodule$robailiusluga" ("myfirstmodule$robailiusluga_kategorijarobe" ASC,"id" ASC);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('93f723a1-7055-3ecd-8895-aebfdcbcb54e', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'idx_myfirstmodule$robailiusluga_myfirstmodule$robailiusluga_kategorijarobe');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('93f723a1-7055-3ecd-8895-aebfdcbcb54e', '045e49da-2d63-4790-80dc-f3080326b926', false, 0);
UPDATE "mendixsystem$association" SET "association_name" = 'MyFirstModule.RobaIliUsluga_JedinicaMere', "table_name" = 'myfirstmodule$robailiusluga', "parent_entity_id" = 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', "child_entity_id" = '422d59d2-0cb4-42e2-ac52-f463c15b4cad', "parent_column_name" = 'id', "child_column_name" = 'myfirstmodule$robailiusluga_jedinicamere', "pk_index_name" = NULL, "index_name" = NULL, "parent_fkc_name" = NULL, "child_fkc_name" = 'frn_myfirstmodule$robailiusluga_myfirstmodule$robailiusluga_jedinicamere', "parent_fkc_action" = NULL, "child_fkc_action" = 2, "storage_format" = 1 WHERE "id" = 'ff655529-bb2a-4953-875c-4459480f589c';
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('045e49da-2d63-4790-80dc-f3080326b926', 'MyFirstModule.RobaIliUsluga_KategorijaRobe', 'myfirstmodule$robailiusluga', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', '688e3395-2151-45c2-bf9a-1bac77757e25', 'id', 'myfirstmodule$robailiusluga_kategorijarobe', 'frn_myfirstmodule$robailiusluga_myfirstmodule$robailiusluga_kategorijarobe', 2, 1);
CREATE TABLE "prodaja$ugovor" (
	"id" BIGINT NOT NULL,
	"brojugovora" INT NULL,
	"datumzakljucenja" TIMESTAMP NULL,
	"datumzavrsetkavazenja" TIMESTAMP NULL,
	"statusugovora" VARCHAR_IGNORECASE(18) NULL,
	"prodaja$ugovor_preduzece" BIGINT NULL,
	"prodaja$ugovor_poslovnipartner" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_prodaja$ugovor_prodaja$ugovor_preduzece" ON "prodaja$ugovor" ("prodaja$ugovor_preduzece" ASC,"id" ASC);
CREATE INDEX "idx_prodaja$ugovor_prodaja$ugovor_poslovnipartner" ON "prodaja$ugovor" ("prodaja$ugovor_poslovnipartner" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('d8f107db-1493-447f-b710-2cd57ae14cc7', 'Prodaja.Ugovor', 'prodaja$ugovor', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('85ccb3dd-475e-4f25-a185-d5d2f6babf5e', 'd8f107db-1493-447f-b710-2cd57ae14cc7', 'brojUgovora', 'brojugovora', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('8e18b950-d4cd-4cb1-87cc-14e01c5a13ca', 'd8f107db-1493-447f-b710-2cd57ae14cc7', 'datumZakljucenja', 'datumzakljucenja', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('d7d05059-fc59-48ec-afba-43af1314cd70', 'd8f107db-1493-447f-b710-2cd57ae14cc7', 'datumZavrsetkaVazenja', 'datumzavrsetkavazenja', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('93858f73-ec88-4bfa-830d-c0243bcadf4f', 'd8f107db-1493-447f-b710-2cd57ae14cc7', 'statusUgovora', 'statusugovora', 40, 18, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('caf2d7bf-9ab4-3c9d-bfd0-7dce844f9375', 'd8f107db-1493-447f-b710-2cd57ae14cc7', 'idx_prodaja$ugovor_prodaja$ugovor_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('caf2d7bf-9ab4-3c9d-bfd0-7dce844f9375', 'a5bc619e-530a-45f0-85cb-c3695203c8c0', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('9378ef25-1440-396a-93b9-3694d41a0932', 'd8f107db-1493-447f-b710-2cd57ae14cc7', 'idx_prodaja$ugovor_prodaja$ugovor_poslovnipartner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('9378ef25-1440-396a-93b9-3694d41a0932', 'f006e043-97fe-4cbf-9f8e-36655402aa82', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('a5bc619e-530a-45f0-85cb-c3695203c8c0', 'Prodaja.Ugovor_Preduzece', 'prodaja$ugovor', 'd8f107db-1493-447f-b710-2cd57ae14cc7', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'prodaja$ugovor_preduzece', 'frn_prodaja$ugovor_prodaja$ugovor_preduzece', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('f006e043-97fe-4cbf-9f8e-36655402aa82', 'Prodaja.Ugovor_PoslovniPartner', 'prodaja$ugovor', 'd8f107db-1493-447f-b710-2cd57ae14cc7', '810e9e9b-6158-4c57-9d2a-b26e8a573215', 'id', 'prodaja$ugovor_poslovnipartner', 'frn_prodaja$ugovor_prodaja$ugovor_poslovnipartner', 2, 1);
CREATE TABLE "prodaja$iznospdv" (
	"id" BIGINT NOT NULL,
	"iznos" DECIMAL(28, 8) NULL,
	"stopapdv" VARCHAR_IGNORECASE(10) NULL,
	"vaziod" TIMESTAMP NULL,
	"prodaja$iznospdv_preduzece" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_prodaja$iznospdv_prodaja$iznospdv_preduzece" ON "prodaja$iznospdv" ("prodaja$iznospdv_preduzece" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('afa08dbb-7919-4152-b2ce-bce9d5045f15', 'Prodaja.IznosPDV', 'prodaja$iznospdv', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('ceaeaeb0-921a-4299-8653-9dab2d5f8960', 'afa08dbb-7919-4152-b2ce-bce9d5045f15', 'iznos', 'iznos', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('1bc13fdc-8e57-4a4e-95a3-fde561384178', 'afa08dbb-7919-4152-b2ce-bce9d5045f15', 'stopaPDV', 'stopapdv', 40, 10, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('9bf033da-8337-4b58-bb76-bda4f51f9a0a', 'afa08dbb-7919-4152-b2ce-bce9d5045f15', 'vaziOd', 'vaziod', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('fc86ef16-f7bc-3f7f-88e4-6c85b8785e36', 'afa08dbb-7919-4152-b2ce-bce9d5045f15', 'idx_prodaja$iznospdv_prodaja$iznospdv_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('fc86ef16-f7bc-3f7f-88e4-6c85b8785e36', '595b2744-5488-4365-bc91-668cd8ee2f25', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('595b2744-5488-4365-bc91-668cd8ee2f25', 'Prodaja.IznosPDV_Preduzece', 'prodaja$iznospdv', 'afa08dbb-7919-4152-b2ce-bce9d5045f15', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'prodaja$iznospdv_preduzece', 'frn_prodaja$iznospdv_prodaja$iznospdv_preduzece', 2, 1);
CREATE TABLE "prodaja$stavkafakture" (
	"id" BIGINT NOT NULL,
	"kolicina" DECIMAL(28, 8) NULL,
	"rabat" DECIMAL(28, 8) NULL,
	"jedinicnacena" DECIMAL(28, 8) NULL,
	"osnovica" DECIMAL(28, 8) NULL,
	"stopapdv" DECIMAL(28, 8) NULL,
	"iznospdv" DECIMAL(28, 8) NULL,
	"ukupno" DECIMAL(28, 8) NULL,
	"prodaja$stavkafakture_robailiusluga" BIGINT NULL,
	"prodaja$stavkafakture_izlaznafaktura" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_prodaja$stavkafakture_prodaja$stavkafakture_robailiusluga" ON "prodaja$stavkafakture" ("prodaja$stavkafakture_robailiusluga" ASC,"id" ASC);
CREATE INDEX "idx_prodaja$stavkafakture_prodaja$stavkafakture_izlaznafaktura" ON "prodaja$stavkafakture" ("prodaja$stavkafakture_izlaznafaktura" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'Prodaja.StavkaFakture', 'prodaja$stavkafakture', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('dc429418-281f-402d-b29c-f3b6af75b3a5', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'kolicina', 'kolicina', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('31d8872e-3c60-400f-9b5f-7a44b20ec02a', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'rabat', 'rabat', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('de43158a-eb2d-414d-999d-8ca7e620f6d0', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'jedinicnaCena', 'jedinicnacena', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('16c3464b-c3ea-477f-9556-8204a19c8c95', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'osnovica', 'osnovica', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('21a2752b-87bd-462a-9c4c-a732a375aede', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'stopaPDV', 'stopapdv', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a4c4c38c-4e2f-4d48-be0f-e0369fa521d9', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'iznosPDV', 'iznospdv', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('7c689749-bdcc-46f5-a476-696c62b7d59d', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'ukupno', 'ukupno', 5, 0, '0', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('e5d78217-248b-333c-a228-f7ce4ef710d0', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'idx_prodaja$stavkafakture_prodaja$stavkafakture_robailiusluga');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('e5d78217-248b-333c-a228-f7ce4ef710d0', 'fd1bff11-277d-4dfc-a85a-12f435630ca5', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('64c7b758-30ed-3ec9-b165-90cf47de83e5', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'idx_prodaja$stavkafakture_prodaja$stavkafakture_izlaznafaktura');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('64c7b758-30ed-3ec9-b165-90cf47de83e5', '954d9182-9c45-45a0-b2d5-f6ce401a9b02', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('fd1bff11-277d-4dfc-a85a-12f435630ca5', 'Prodaja.StavkaFakture_RobaIliUsluga', 'prodaja$stavkafakture', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'id', 'prodaja$stavkafakture_robailiusluga', 'frn_prodaja$stavkafakture_prodaja$stavkafakture_robailiusluga', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('954d9182-9c45-45a0-b2d5-f6ce401a9b02', 'Prodaja.StavkaFakture_IzlaznaFaktura', 'prodaja$stavkafakture', '26648b06-f188-406d-ad8d-8d67aaf9a6a9', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'id', 'prodaja$stavkafakture_izlaznafaktura', 'frn_prodaja$stavkafakture_prodaja$stavkafakture_izlaznafaktura', 2, 1);
CREATE TABLE "prodaja$narudzbenicakupca" (
	"id" BIGINT NOT NULL,
	"rokisporuke" TIMESTAMP NULL,
	"nacinpakovanja" VARCHAR_IGNORECASE(200) NULL,
	"nacinplacanja" VARCHAR_IGNORECASE(200) NULL,
	"usaglasenacena" DECIMAL(28, 8) NULL,
	"mestopreuzimanjaisporuke" VARCHAR_IGNORECASE(200) NULL,
	"prodaja$narudzbenicakupca_poslovnipartner" BIGINT NULL,
	"prodaja$narudzbenicakupca_ugovor" BIGINT NULL,
	"prodaja$narudzbenicakupca_preduzece" BIGINT NULL,
	"prodaja$narudzbenicakupca_izlaznafaktura" BIGINT NULL,
	"prodaja$narudzbenicakupca_poslovnagodina" BIGINT NULL,
	PRIMARY KEY("id"),
	CONSTRAINT "uniq_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_izlaznafaktura" UNIQUE ("prodaja$narudzbenicakupca_izlaznafaktura"));
CREATE INDEX "idx_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_poslovnipartner" ON "prodaja$narudzbenicakupca" ("prodaja$narudzbenicakupca_poslovnipartner" ASC,"id" ASC);
CREATE INDEX "idx_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_ugovor" ON "prodaja$narudzbenicakupca" ("prodaja$narudzbenicakupca_ugovor" ASC,"id" ASC);
CREATE INDEX "idx_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_preduzece" ON "prodaja$narudzbenicakupca" ("prodaja$narudzbenicakupca_preduzece" ASC,"id" ASC);
CREATE INDEX "idx_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_izlaznafaktura" ON "prodaja$narudzbenicakupca" ("prodaja$narudzbenicakupca_izlaznafaktura" ASC,"id" ASC);
CREATE INDEX "idx_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_poslovnagodina" ON "prodaja$narudzbenicakupca" ("prodaja$narudzbenicakupca_poslovnagodina" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('f50292ea-5bef-489c-b4cd-db0246eae494', 'Prodaja.NarudzbenicaKupca', 'prodaja$narudzbenicakupca', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('2cbbae85-1ad9-479e-96ad-7fad6c7a22eb', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'rokIsporuke', 'rokisporuke', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('f1f5d9b6-8b82-4f2f-b135-9361257dc0a5', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'nacinPakovanja', 'nacinpakovanja', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('415619da-794f-47dc-b3c0-2fa687300531', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'nacinPlacanja', 'nacinplacanja', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('49eb7eb4-3a7a-42ea-8ba4-6a69e2a7fb2c', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'usaglasenaCena', 'usaglasenacena', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('61eae53b-7fd1-44fd-8efe-03976b591061', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'mestoPreuzimanjaIsporuke', 'mestopreuzimanjaisporuke', 30, 200, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('9e408864-d8a3-3508-a7c3-07c5cfe1198d', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'idx_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_poslovnipartner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('9e408864-d8a3-3508-a7c3-07c5cfe1198d', 'fe27da6b-3620-4e8e-b274-109ea0fd2f98', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('653b3c07-d29f-3533-8a88-a8b23bf82dd3', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'idx_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_ugovor');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('653b3c07-d29f-3533-8a88-a8b23bf82dd3', '7073391e-7f0c-4ddf-a40d-ef25af61dafc', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('368729b4-f71d-3fed-aecb-ed9c3cf00b1b', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'idx_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('368729b4-f71d-3fed-aecb-ed9c3cf00b1b', '9428773c-cfc5-41b8-bd39-5f16c2cd2608', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('d93580bb-a7ab-3d8d-86ed-1df7b00c43b7', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'idx_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_izlaznafaktura');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('d93580bb-a7ab-3d8d-86ed-1df7b00c43b7', 'f5d991d5-c363-4990-b179-2b385ae1f33f', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('ced8445d-cd04-3d33-84e4-3cddcb79f9dc', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'idx_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_poslovnagodina');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('ced8445d-cd04-3d33-84e4-3cddcb79f9dc', '43d9620b-e83c-4ae1-ad7a-40a32569218c', false, 0);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_izlaznafaktura', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'f5d991d5-c363-4990-b179-2b385ae1f33f');
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('fe27da6b-3620-4e8e-b274-109ea0fd2f98', 'Prodaja.NarudzbenicaKupca_PoslovniPartner', 'prodaja$narudzbenicakupca', 'f50292ea-5bef-489c-b4cd-db0246eae494', '810e9e9b-6158-4c57-9d2a-b26e8a573215', 'id', 'prodaja$narudzbenicakupca_poslovnipartner', 'frn_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_poslovnipartner', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('7073391e-7f0c-4ddf-a40d-ef25af61dafc', 'Prodaja.NarudzbenicaKupca_Ugovor', 'prodaja$narudzbenicakupca', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'd8f107db-1493-447f-b710-2cd57ae14cc7', 'id', 'prodaja$narudzbenicakupca_ugovor', 'frn_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_ugovor', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('9428773c-cfc5-41b8-bd39-5f16c2cd2608', 'Prodaja.NarudzbenicaKupca_Preduzece', 'prodaja$narudzbenicakupca', 'f50292ea-5bef-489c-b4cd-db0246eae494', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'prodaja$narudzbenicakupca_preduzece', 'frn_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_preduzece', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('f5d991d5-c363-4990-b179-2b385ae1f33f', 'Prodaja.NarudzbenicaKupca_IzlaznaFaktura', 'prodaja$narudzbenicakupca', 'f50292ea-5bef-489c-b4cd-db0246eae494', '9964805e-2a84-4c40-8ed1-34c7cc78539d', 'id', 'prodaja$narudzbenicakupca_izlaznafaktura', 'frn_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_izlaznafaktura', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('43d9620b-e83c-4ae1-ad7a-40a32569218c', 'Prodaja.NarudzbenicaKupca_PoslovnaGodina', 'prodaja$narudzbenicakupca', 'f50292ea-5bef-489c-b4cd-db0246eae494', '7a2371c6-62d4-404f-b08a-4e60cc8df1a8', 'id', 'prodaja$narudzbenicakupca_poslovnagodina', 'frn_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_poslovnagodina', 2, 1);
CREATE TABLE "prodaja$stavkanarudzbenice" (
	"id" BIGINT NOT NULL,
	"kolicina" DECIMAL(28, 8) NULL,
	"cena" DECIMAL(28, 8) NULL,
	"ukupnostavka" DECIMAL(28, 8) NULL,
	"prodaja$stavkanarudzbenice_robailiusluga" BIGINT NULL,
	"prodaja$stavkanarudzbenice_narudzbenicakupca" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_prodaja$stavkanarudzbenice_prodaja$stavkanarudzbenice_robailiusluga" ON "prodaja$stavkanarudzbenice" ("prodaja$stavkanarudzbenice_robailiusluga" ASC,"id" ASC);
CREATE INDEX "idx_prodaja$stavkanarudzbenice_prodaja$stavkanarudzbenice_narudzbenicakupca" ON "prodaja$stavkanarudzbenice" ("prodaja$stavkanarudzbenice_narudzbenicakupca" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('9395ca66-84e4-4422-938d-452d7bad8621', 'Prodaja.StavkaNarudzbenice', 'prodaja$stavkanarudzbenice', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('c7354159-35ad-44cf-9072-4110986787a7', '9395ca66-84e4-4422-938d-452d7bad8621', 'kolicina', 'kolicina', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('c39d2686-9a95-4655-a3b5-d82c850a26f8', '9395ca66-84e4-4422-938d-452d7bad8621', 'cena', 'cena', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('4bbb99ae-27ce-4119-9d00-6835da729717', '9395ca66-84e4-4422-938d-452d7bad8621', 'ukupnoStavka', 'ukupnostavka', 5, 0, '0', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('df1b0cf3-a403-3a00-8c83-729c62a69949', '9395ca66-84e4-4422-938d-452d7bad8621', 'idx_prodaja$stavkanarudzbenice_prodaja$stavkanarudzbenice_robailiusluga');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('df1b0cf3-a403-3a00-8c83-729c62a69949', '16a81f51-74c8-4bb0-bb53-525959d90094', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('67521e8e-195d-31cd-8f52-b8eb385a2f5d', '9395ca66-84e4-4422-938d-452d7bad8621', 'idx_prodaja$stavkanarudzbenice_prodaja$stavkanarudzbenice_narudzbenicakupca');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('67521e8e-195d-31cd-8f52-b8eb385a2f5d', 'c1915f1f-81a8-4f97-8888-440b094fa4fc', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('16a81f51-74c8-4bb0-bb53-525959d90094', 'Prodaja.StavkaNarudzbenice_RobaIliUsluga', 'prodaja$stavkanarudzbenice', '9395ca66-84e4-4422-938d-452d7bad8621', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'id', 'prodaja$stavkanarudzbenice_robailiusluga', 'frn_prodaja$stavkanarudzbenice_prodaja$stavkanarudzbenice_robailiusluga', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('c1915f1f-81a8-4f97-8888-440b094fa4fc', 'Prodaja.StavkaNarudzbenice_NarudzbenicaKupca', 'prodaja$stavkanarudzbenice', '9395ca66-84e4-4422-938d-452d7bad8621', 'f50292ea-5bef-489c-b4cd-db0246eae494', 'id', 'prodaja$stavkanarudzbenice_narudzbenicakupca', 'frn_prodaja$stavkanarudzbenice_prodaja$stavkanarudzbenice_narudzbenicakupca', 2, 1);
CREATE TABLE "prodaja$kategorijarobe" (
	"id" BIGINT NOT NULL,
	"nazivkategorije" VARCHAR_IGNORECASE(200) NULL,
	"stopapdv" VARCHAR_IGNORECASE(10) NULL,
	"prodaja$kategorijarobe_preduzece" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_prodaja$kategorijarobe_prodaja$kategorijarobe_preduzece" ON "prodaja$kategorijarobe" ("prodaja$kategorijarobe_preduzece" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('688e3395-2151-45c2-bf9a-1bac77757e25', 'Prodaja.KategorijaRobe', 'prodaja$kategorijarobe', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('b706410b-ffb7-4379-917b-6a2708840219', '688e3395-2151-45c2-bf9a-1bac77757e25', 'nazivKategorije', 'nazivkategorije', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('9bf1bc99-eda3-42f7-9e87-45dd51e5cfa7', '688e3395-2151-45c2-bf9a-1bac77757e25', 'stopaPDV', 'stopapdv', 40, 10, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('90e68d26-ca27-32f4-bfc4-a6002befe1df', '688e3395-2151-45c2-bf9a-1bac77757e25', 'idx_prodaja$kategorijarobe_prodaja$kategorijarobe_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('90e68d26-ca27-32f4-bfc4-a6002befe1df', '128ec785-167a-4c88-bdda-dd5f99342a71', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('128ec785-167a-4c88-bdda-dd5f99342a71', 'Prodaja.KategorijaRobe_Preduzece', 'prodaja$kategorijarobe', '688e3395-2151-45c2-bf9a-1bac77757e25', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'prodaja$kategorijarobe_preduzece', 'frn_prodaja$kategorijarobe_prodaja$kategorijarobe_preduzece', 2, 1);
CREATE TABLE "prodaja$cenovnik" (
	"id" BIGINT NOT NULL,
	"datumvazenja" TIMESTAMP NULL,
	"prodaja$cenovnik_preduzece" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_prodaja$cenovnik_prodaja$cenovnik_preduzece" ON "prodaja$cenovnik" ("prodaja$cenovnik_preduzece" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('6ce831ac-593f-4d38-b933-f9c48c85b8f1', 'Prodaja.Cenovnik', 'prodaja$cenovnik', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('381753fe-8d65-479c-b74b-ad1ae10e501d', '6ce831ac-593f-4d38-b933-f9c48c85b8f1', 'datumVazenja', 'datumvazenja', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('0308644e-bb45-38ae-9a68-c8521848ba57', '6ce831ac-593f-4d38-b933-f9c48c85b8f1', 'idx_prodaja$cenovnik_prodaja$cenovnik_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('0308644e-bb45-38ae-9a68-c8521848ba57', '2cc7f77f-749a-4073-a00f-63e88b070136', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('2cc7f77f-749a-4073-a00f-63e88b070136', 'Prodaja.Cenovnik_Preduzece', 'prodaja$cenovnik', '6ce831ac-593f-4d38-b933-f9c48c85b8f1', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'prodaja$cenovnik_preduzece', 'frn_prodaja$cenovnik_prodaja$cenovnik_preduzece', 2, 1);
CREATE TABLE "prodaja$cena" (
	"id" BIGINT NOT NULL,
	"iznos" DECIMAL(28, 8) NULL,
	"prodaja$cena_cenovnik" BIGINT NULL,
	"prodaja$cena_robailiusluga" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_prodaja$cena_prodaja$cena_cenovnik" ON "prodaja$cena" ("prodaja$cena_cenovnik" ASC,"id" ASC);
CREATE INDEX "idx_prodaja$cena_prodaja$cena_robailiusluga" ON "prodaja$cena" ("prodaja$cena_robailiusluga" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('774949f4-b629-4d3d-ae5c-7fe0968dd9b5', 'Prodaja.Cena', 'prodaja$cena', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('38e2821e-f299-4975-a19f-26b02705ec92', '774949f4-b629-4d3d-ae5c-7fe0968dd9b5', 'iznos', 'iznos', 5, 0, '0', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('a5f30074-b4b1-3431-a778-331b63757c67', '774949f4-b629-4d3d-ae5c-7fe0968dd9b5', 'idx_prodaja$cena_prodaja$cena_cenovnik');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('a5f30074-b4b1-3431-a778-331b63757c67', '20758319-c92c-495c-8aa5-1834183d212a', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('c7592d31-b25a-3da0-b3d4-e23fdb771819', '774949f4-b629-4d3d-ae5c-7fe0968dd9b5', 'idx_prodaja$cena_prodaja$cena_robailiusluga');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('c7592d31-b25a-3da0-b3d4-e23fdb771819', 'be1d51ad-e72e-42f8-9b1f-4ecdfa88b050', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('20758319-c92c-495c-8aa5-1834183d212a', 'Prodaja.Cena_Cenovnik', 'prodaja$cena', '774949f4-b629-4d3d-ae5c-7fe0968dd9b5', '6ce831ac-593f-4d38-b933-f9c48c85b8f1', 'id', 'prodaja$cena_cenovnik', 'frn_prodaja$cena_prodaja$cena_cenovnik', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('be1d51ad-e72e-42f8-9b1f-4ecdfa88b050', 'Prodaja.Cena_RobaIliUsluga', 'prodaja$cena', '774949f4-b629-4d3d-ae5c-7fe0968dd9b5', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'id', 'prodaja$cena_robailiusluga', 'frn_prodaja$cena_prodaja$cena_robailiusluga', 2, 1);
CREATE TABLE "prodaja$otpremnica" (
	"id" BIGINT NOT NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('dc3c77fc-c6bd-43e8-b7ab-abf2ca7003a9', 'Prodaja.Otpremnica', 'prodaja$otpremnica', false, false);
ALTER TABLE "prodaja$izlaznafaktura" ADD CONSTRAINT "frn_prodaja$izlaznafaktura_prodaja$izlaznafaktura_preduzece" FOREIGN KEY ( "prodaja$izlaznafaktura_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$robailiusluga" ADD CONSTRAINT "frn_myfirstmodule$robailiusluga_myfirstmodule$robailiusluga_kategorijarobe" FOREIGN KEY ( "myfirstmodule$robailiusluga_kategorijarobe" ) REFERENCES "prodaja$kategorijarobe" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$ugovor" ADD CONSTRAINT "frn_prodaja$ugovor_prodaja$ugovor_preduzece" FOREIGN KEY ( "prodaja$ugovor_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$ugovor" ADD CONSTRAINT "frn_prodaja$ugovor_prodaja$ugovor_poslovnipartner" FOREIGN KEY ( "prodaja$ugovor_poslovnipartner" ) REFERENCES "myfirstmodule$poslovnipartner" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$iznospdv" ADD CONSTRAINT "frn_prodaja$iznospdv_prodaja$iznospdv_preduzece" FOREIGN KEY ( "prodaja$iznospdv_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$stavkafakture" ADD CONSTRAINT "frn_prodaja$stavkafakture_prodaja$stavkafakture_robailiusluga" FOREIGN KEY ( "prodaja$stavkafakture_robailiusluga" ) REFERENCES "myfirstmodule$robailiusluga" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$stavkafakture" ADD CONSTRAINT "frn_prodaja$stavkafakture_prodaja$stavkafakture_izlaznafaktura" FOREIGN KEY ( "prodaja$stavkafakture_izlaznafaktura" ) REFERENCES "prodaja$izlaznafaktura" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$narudzbenicakupca" ADD CONSTRAINT "frn_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_poslovnipartner" FOREIGN KEY ( "prodaja$narudzbenicakupca_poslovnipartner" ) REFERENCES "myfirstmodule$poslovnipartner" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$narudzbenicakupca" ADD CONSTRAINT "frn_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_ugovor" FOREIGN KEY ( "prodaja$narudzbenicakupca_ugovor" ) REFERENCES "prodaja$ugovor" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$narudzbenicakupca" ADD CONSTRAINT "frn_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_izlaznafaktura" FOREIGN KEY ( "prodaja$narudzbenicakupca_izlaznafaktura" ) REFERENCES "prodaja$izlaznafaktura" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$narudzbenicakupca" ADD CONSTRAINT "frn_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_poslovnagodina" FOREIGN KEY ( "prodaja$narudzbenicakupca_poslovnagodina" ) REFERENCES "myfirstmodule$poslovnagodina" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$narudzbenicakupca" ADD CONSTRAINT "frn_prodaja$narudzbenicakupca_prodaja$narudzbenicakupca_preduzece" FOREIGN KEY ( "prodaja$narudzbenicakupca_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$stavkanarudzbenice" ADD CONSTRAINT "frn_prodaja$stavkanarudzbenice_prodaja$stavkanarudzbenice_robailiusluga" FOREIGN KEY ( "prodaja$stavkanarudzbenice_robailiusluga" ) REFERENCES "myfirstmodule$robailiusluga" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$stavkanarudzbenice" ADD CONSTRAINT "frn_prodaja$stavkanarudzbenice_prodaja$stavkanarudzbenice_narudzbenicakupca" FOREIGN KEY ( "prodaja$stavkanarudzbenice_narudzbenicakupca" ) REFERENCES "prodaja$narudzbenicakupca" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$kategorijarobe" ADD CONSTRAINT "frn_prodaja$kategorijarobe_prodaja$kategorijarobe_preduzece" FOREIGN KEY ( "prodaja$kategorijarobe_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$cenovnik" ADD CONSTRAINT "frn_prodaja$cenovnik_prodaja$cenovnik_preduzece" FOREIGN KEY ( "prodaja$cenovnik_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$cena" ADD CONSTRAINT "frn_prodaja$cena_prodaja$cena_cenovnik" FOREIGN KEY ( "prodaja$cena_cenovnik" ) REFERENCES "prodaja$cenovnik" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "prodaja$cena" ADD CONSTRAINT "frn_prodaja$cena_prodaja$cena_robailiusluga" FOREIGN KEY ( "prodaja$cena_robailiusluga" ) REFERENCES "myfirstmodule$robailiusluga" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251006 13:16:24';
