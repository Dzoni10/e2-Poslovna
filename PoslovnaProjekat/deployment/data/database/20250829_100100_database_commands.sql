CREATE TABLE "myfirstmodule$poslovnipartner" (
	"id" BIGINT NOT NULL,
	"vrstapartnera" VARCHAR_IGNORECASE(9) NULL,
	"myfirstmodule$poslovnipartner_preduzece" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$poslovnipartner_myfirstmodule$poslovnipartner_preduzece" ON "myfirstmodule$poslovnipartner" ("myfirstmodule$poslovnipartner_preduzece" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('810e9e9b-6158-4c57-9d2a-b26e8a573215', 'MyFirstModule.PoslovniPartner', 'myfirstmodule$poslovnipartner', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('eae51707-6d4c-49b4-b30f-6fccd9695716', '810e9e9b-6158-4c57-9d2a-b26e8a573215', 'vrstaPartnera', 'vrstapartnera', 40, 9, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('9d3647e9-935b-3158-bd6a-2c80aac31b13', '810e9e9b-6158-4c57-9d2a-b26e8a573215', 'idx_myfirstmodule$poslovnipartner_myfirstmodule$poslovnipartner_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('9d3647e9-935b-3158-bd6a-2c80aac31b13', 'c7669aee-f584-4fc2-940f-93fd3efa4f59', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('c7669aee-f584-4fc2-940f-93fd3efa4f59', 'MyFirstModule.PoslovniPartner_Preduzece', 'myfirstmodule$poslovnipartner', '810e9e9b-6158-4c57-9d2a-b26e8a573215', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'myfirstmodule$poslovnipartner_preduzece', 'frn_myfirstmodule$poslovnipartner_myfirstmodule$poslovnipartner_preduzece', 2, 1);
CREATE TABLE "myfirstmodule$kategorija" (
	"id" BIGINT NOT NULL,
	"nazivkategorije" VARCHAR_IGNORECASE(200) NULL,
	"myfirstmodule$kategorija_preduzece" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$kategorija_myfirstmodule$kategorija_preduzece" ON "myfirstmodule$kategorija" ("myfirstmodule$kategorija_preduzece" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('34cd2fbd-e9d8-4b1c-9235-bc6df34da129', 'MyFirstModule.Kategorija', 'myfirstmodule$kategorija', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('8c421a84-a3b7-446b-a201-3f68d8007fe7', '34cd2fbd-e9d8-4b1c-9235-bc6df34da129', 'nazivKategorije', 'nazivkategorije', 30, 200, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('69bcd4d5-504e-3767-8bf9-c1b3947c1ae3', '34cd2fbd-e9d8-4b1c-9235-bc6df34da129', 'idx_myfirstmodule$kategorija_myfirstmodule$kategorija_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('69bcd4d5-504e-3767-8bf9-c1b3947c1ae3', 'be02314f-bb0f-4576-abfa-7bd997db21db', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('be02314f-bb0f-4576-abfa-7bd997db21db', 'MyFirstModule.Kategorija_Preduzece', 'myfirstmodule$kategorija', '34cd2fbd-e9d8-4b1c-9235-bc6df34da129', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'myfirstmodule$kategorija_preduzece', 'frn_myfirstmodule$kategorija_myfirstmodule$kategorija_preduzece', 2, 1);
CREATE TABLE "myfirstmodule$robnakartica" (
	"id" BIGINT NOT NULL,
	"pocstanjekolicina" DECIMAL(28, 8) NULL,
	"prometulazakolicina" DECIMAL(28, 8) NULL,
	"prometizlazakolicina" DECIMAL(28, 8) NULL,
	"ukupnakolicina" DECIMAL(28, 8) NULL,
	"pocstanjevrednost" DECIMAL(28, 8) NULL,
	"prometulazavrednost" DECIMAL(28, 8) NULL,
	"prometizlazavrednost" DECIMAL(28, 8) NULL,
	"ukupnavrednost" DECIMAL(28, 8) NULL,
	"cena" DECIMAL(28, 8) NULL,
	"myfirstmodule$robnakartica_poslovnagodina" BIGINT NULL,
	"myfirstmodule$robnakartica_robailiusluga" BIGINT NULL,
	"myfirstmodule$robnakartica_magacin" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$robnakartica_myfirstmodule$robnakartica_poslovnagodina" ON "myfirstmodule$robnakartica" ("myfirstmodule$robnakartica_poslovnagodina" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$robnakartica_myfirstmodule$robnakartica_robailiusluga" ON "myfirstmodule$robnakartica" ("myfirstmodule$robnakartica_robailiusluga" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$robnakartica_myfirstmodule$robnakartica_magacin" ON "myfirstmodule$robnakartica" ("myfirstmodule$robnakartica_magacin" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('7df7c2ec-0e85-4184-904d-e28be20102e5', 'MyFirstModule.RobnaKartica', 'myfirstmodule$robnakartica', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('0f5668a6-d219-4916-849f-55ef699061d2', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'pocStanjeKolicina', 'pocstanjekolicina', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('965f9082-4151-4152-9e11-bc92108693a5', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'prometUlazaKolicina', 'prometulazakolicina', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('df0b6166-c9c0-42bc-8f9c-164e1a2ebd45', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'prometIzlazaKolicina', 'prometizlazakolicina', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('3767df67-5dfa-4599-8a00-354d49da7867', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'ukupnaKolicina', 'ukupnakolicina', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('04617ad8-8ca1-4acb-987f-adbebfa584f7', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'pocStanjeVrednost', 'pocstanjevrednost', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('c6149a02-c9c3-429e-9396-5bf0598d9fb8', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'prometUlazaVrednost', 'prometulazavrednost', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('fe9ffda3-870f-490f-a87c-4af4827c5707', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'prometIzlazaVrednost', 'prometizlazavrednost', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('7769ea28-4294-4b62-aa30-11ad42776aab', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'ukupnaVrednost', 'ukupnavrednost', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('9a641ab6-c9bb-43ad-88d1-6c417e9b4d73', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'cena', 'cena', 5, 0, '0', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('ceae231e-7906-3225-a4fb-180e51755312', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'idx_myfirstmodule$robnakartica_myfirstmodule$robnakartica_poslovnagodina');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('ceae231e-7906-3225-a4fb-180e51755312', 'c89b0cde-99e9-408a-b570-5be6ffc5f22f', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('969f0b15-26cf-38a7-8e41-ff1eb504616e', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'idx_myfirstmodule$robnakartica_myfirstmodule$robnakartica_robailiusluga');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('969f0b15-26cf-38a7-8e41-ff1eb504616e', 'fc2e8d2d-0b0b-460a-aa2c-873117e93fb5', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('04e64258-f321-3087-89f8-f22db1cc8d48', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'idx_myfirstmodule$robnakartica_myfirstmodule$robnakartica_magacin');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('04e64258-f321-3087-89f8-f22db1cc8d48', '6552d693-26c2-4cd2-931e-07c8e366ad9a', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('c89b0cde-99e9-408a-b570-5be6ffc5f22f', 'MyFirstModule.RobnaKartica_PoslovnaGodina', 'myfirstmodule$robnakartica', '7df7c2ec-0e85-4184-904d-e28be20102e5', '7a2371c6-62d4-404f-b08a-4e60cc8df1a8', 'id', 'myfirstmodule$robnakartica_poslovnagodina', 'frn_myfirstmodule$robnakartica_myfirstmodule$robnakartica_poslovnagodina', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('fc2e8d2d-0b0b-460a-aa2c-873117e93fb5', 'MyFirstModule.RobnaKartica_RobaIliUsluga', 'myfirstmodule$robnakartica', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'id', 'myfirstmodule$robnakartica_robailiusluga', 'frn_myfirstmodule$robnakartica_myfirstmodule$robnakartica_robailiusluga', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('6552d693-26c2-4cd2-931e-07c8e366ad9a', 'MyFirstModule.RobnaKartica_Magacin', 'myfirstmodule$robnakartica', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'f8bdacae-115a-482d-8d08-47574f9272c0', 'id', 'myfirstmodule$robnakartica_magacin', 'frn_myfirstmodule$robnakartica_myfirstmodule$robnakartica_magacin', 2, 1);
CREATE TABLE "myfirstmodule$magacin" (
	"id" BIGINT NOT NULL,
	"nazivmagacina" VARCHAR_IGNORECASE(200) NULL,
	"myfirstmodule$magacin_radnik" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$magacin_myfirstmodule$magacin_radnik" ON "myfirstmodule$magacin" ("myfirstmodule$magacin_radnik" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('f8bdacae-115a-482d-8d08-47574f9272c0', 'MyFirstModule.Magacin', 'myfirstmodule$magacin', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('30d677a8-5893-4a0d-9815-5d733ca44998', 'f8bdacae-115a-482d-8d08-47574f9272c0', 'nazivMagacina', 'nazivmagacina', 30, 200, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('2e9fd783-9963-39d0-8463-5ae78aedf6c8', 'f8bdacae-115a-482d-8d08-47574f9272c0', 'idx_myfirstmodule$magacin_myfirstmodule$magacin_radnik');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('2e9fd783-9963-39d0-8463-5ae78aedf6c8', '0fc5bca1-df13-4501-9d97-1f07e5945985', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('0fc5bca1-df13-4501-9d97-1f07e5945985', 'MyFirstModule.Magacin_Radnik', 'myfirstmodule$magacin', 'f8bdacae-115a-482d-8d08-47574f9272c0', '2005476c-b225-4c02-977a-b9bf6e894ca9', 'id', 'myfirstmodule$magacin_radnik', 'frn_myfirstmodule$magacin_myfirstmodule$magacin_radnik', 2, 1);
CREATE TABLE "myfirstmodule$stavkeprometnogdokumenta" (
	"id" BIGINT NOT NULL,
	"kolicina" INT NULL,
	"cena" DECIMAL(28, 8) NULL,
	"vrednost" INT NULL,
	"myfirstmodule$stavkeprometnogdokumenta_prometnidokument" BIGINT NULL,
	"myfirstmodule$stavkeprometnogdokumenta_robailiusluga" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$stavkeprometnogdokumenta_myfirstmodule$stavkeprometnogdokumenta_prometnidokument" ON "myfirstmodule$stavkeprometnogdokumenta" ("myfirstmodule$stavkeprometnogdokumenta_prometnidokument" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$stavkeprometnogdokumenta_myfirstmodule$stavkeprometnogdokumenta_robailiusluga" ON "myfirstmodule$stavkeprometnogdokumenta" ("myfirstmodule$stavkeprometnogdokumenta_robailiusluga" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('ae6fd1ff-eb91-44fd-ab0e-be367fceb92a', 'MyFirstModule.StavkePrometnogDokumenta', 'myfirstmodule$stavkeprometnogdokumenta', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('72fcdfcf-4a42-44c4-968f-87569cf8000f', 'ae6fd1ff-eb91-44fd-ab0e-be367fceb92a', 'kolicina', 'kolicina', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('d2799413-d924-4ba2-83c2-1bd8fecd7ecb', 'ae6fd1ff-eb91-44fd-ab0e-be367fceb92a', 'cena', 'cena', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('ac5c5c60-a82b-4427-aa07-7bbf9d3a5187', 'ae6fd1ff-eb91-44fd-ab0e-be367fceb92a', 'vrednost', 'vrednost', 3, 0, '0', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('85d71d3a-bf7d-3c56-a9c4-f6e41a3b9598', 'ae6fd1ff-eb91-44fd-ab0e-be367fceb92a', 'idx_myfirstmodule$stavkeprometnogdokumenta_myfirstmodule$stavkeprometnogdokumenta_prometnidokument');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('85d71d3a-bf7d-3c56-a9c4-f6e41a3b9598', '8e387ebf-995d-4fe5-820f-af204add6f35', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('8da8e04d-4f94-30f1-96a7-d89c9aa0d554', 'ae6fd1ff-eb91-44fd-ab0e-be367fceb92a', 'idx_myfirstmodule$stavkeprometnogdokumenta_myfirstmodule$stavkeprometnogdokumenta_robailiusluga');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('8da8e04d-4f94-30f1-96a7-d89c9aa0d554', '1a95a0c4-f627-47bd-b86d-f95364f92b4a', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('8e387ebf-995d-4fe5-820f-af204add6f35', 'MyFirstModule.StavkePrometnogDokumenta_PrometniDokument', 'myfirstmodule$stavkeprometnogdokumenta', 'ae6fd1ff-eb91-44fd-ab0e-be367fceb92a', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'id', 'myfirstmodule$stavkeprometnogdokumenta_prometnidokument', 'frn_myfirstmodule$stavkeprometnogdokumenta_myfirstmodule$stavkeprometnogdokumenta_prometnidokument', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('1a95a0c4-f627-47bd-b86d-f95364f92b4a', 'MyFirstModule.StavkePrometnogDokumenta_RobaIliUsluga', 'myfirstmodule$stavkeprometnogdokumenta', 'ae6fd1ff-eb91-44fd-ab0e-be367fceb92a', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'id', 'myfirstmodule$stavkeprometnogdokumenta_robailiusluga', 'frn_myfirstmodule$stavkeprometnogdokumenta_myfirstmodule$stavkeprometnogdokumenta_robailiusluga', 2, 1);
CREATE TABLE "myfirstmodule$radnik" (
	"id" BIGINT NOT NULL,
	"ime" VARCHAR_IGNORECASE(200) NULL,
	"prezime" VARCHAR_IGNORECASE(200) NULL,
	"myfirstmodule$radnik_preduzece" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$radnik_myfirstmodule$radnik_preduzece" ON "myfirstmodule$radnik" ("myfirstmodule$radnik_preduzece" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('2005476c-b225-4c02-977a-b9bf6e894ca9', 'MyFirstModule.Radnik', 'myfirstmodule$radnik', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('783b06d8-3482-4285-a70d-184d7ad2943a', '2005476c-b225-4c02-977a-b9bf6e894ca9', 'Ime', 'ime', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('c782802d-96b3-42b9-b5df-9f71eefeecce', '2005476c-b225-4c02-977a-b9bf6e894ca9', 'Prezime', 'prezime', 30, 200, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('46e1ec2c-2159-3984-8542-843faed58255', '2005476c-b225-4c02-977a-b9bf6e894ca9', 'idx_myfirstmodule$radnik_myfirstmodule$radnik_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('46e1ec2c-2159-3984-8542-843faed58255', '8fdf054a-fa05-45aa-9a47-649387d2e650', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('8fdf054a-fa05-45aa-9a47-649387d2e650', 'MyFirstModule.Radnik_Preduzece', 'myfirstmodule$radnik', '2005476c-b225-4c02-977a-b9bf6e894ca9', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'myfirstmodule$radnik_preduzece', 'frn_myfirstmodule$radnik_myfirstmodule$radnik_preduzece', 2, 1);
CREATE TABLE "myfirstmodule$robailiusluga" (
	"id" BIGINT NOT NULL,
	"naziv" VARCHAR_IGNORECASE(200) NULL,
	"opis" VARCHAR_IGNORECASE(200) NULL,
	"roba" BOOLEAN NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'MyFirstModule.RobaIliUsluga', 'myfirstmodule$robailiusluga', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('318811f3-6af5-40db-b36c-7ba722d58b12', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'naziv', 'naziv', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('ed355d4d-ed0f-417a-b858-20c074b4dd68', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'opis', 'opis', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('dd4e3c3a-e15d-47e9-9a63-cfbf969dd779', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'roba', 'roba', 10, 0, 'false', false);
CREATE TABLE "myfirstmodule$stavkapopisnogdokumenta" (
	"id" BIGINT NOT NULL,
	"kolicinapopopisu" INT NULL,
	"myfirstmodule$stavkapopisnogdokumenta_robailiusluga" BIGINT NULL,
	"myfirstmodule$stavkapopisnogdokumenta_popisnidokument" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$stavkapopisnogdokumenta_myfirstmodule$stavkapopisnogdokumenta_robailiusluga" ON "myfirstmodule$stavkapopisnogdokumenta" ("myfirstmodule$stavkapopisnogdokumenta_robailiusluga" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$stavkapopisnogdokumenta_myfirstmodule$stavkapopisnogdokumenta_popisnidokument" ON "myfirstmodule$stavkapopisnogdokumenta" ("myfirstmodule$stavkapopisnogdokumenta_popisnidokument" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('69be11ef-fe54-4797-841b-a58b7f1bff11', 'MyFirstModule.StavkaPopisnogDokumenta', 'myfirstmodule$stavkapopisnogdokumenta', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('c7349cb8-fee0-4ff0-bb44-d00c75477f1a', '69be11ef-fe54-4797-841b-a58b7f1bff11', 'kolicinaPoPopisu', 'kolicinapopopisu', 3, 0, '0', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('9fb748df-a0fb-3a16-a146-e981f6fc86b5', '69be11ef-fe54-4797-841b-a58b7f1bff11', 'idx_myfirstmodule$stavkapopisnogdokumenta_myfirstmodule$stavkapopisnogdokumenta_robailiusluga');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('9fb748df-a0fb-3a16-a146-e981f6fc86b5', '7001c262-30b4-47d2-b7b8-7ca24b5201a2', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('4656520c-c7fa-32e8-81c8-2fbe6fbbbbc2', '69be11ef-fe54-4797-841b-a58b7f1bff11', 'idx_myfirstmodule$stavkapopisnogdokumenta_myfirstmodule$stavkapopisnogdokumenta_popisnidokument');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('4656520c-c7fa-32e8-81c8-2fbe6fbbbbc2', 'e451c95b-6454-4d27-9129-664c4febdc85', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('7001c262-30b4-47d2-b7b8-7ca24b5201a2', 'MyFirstModule.StavkaPopisnogDokumenta_RobaIliUsluga', 'myfirstmodule$stavkapopisnogdokumenta', '69be11ef-fe54-4797-841b-a58b7f1bff11', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'id', 'myfirstmodule$stavkapopisnogdokumenta_robailiusluga', 'frn_myfirstmodule$stavkapopisnogdokumenta_myfirstmodule$stavkapopisnogdokumenta_robailiusluga', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('e451c95b-6454-4d27-9129-664c4febdc85', 'MyFirstModule.StavkaPopisnogDokumenta_PopisniDokument', 'myfirstmodule$stavkapopisnogdokumenta', '69be11ef-fe54-4797-841b-a58b7f1bff11', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'id', 'myfirstmodule$stavkapopisnogdokumenta_popisnidokument', 'frn_myfirstmodule$stavkapopisnogdokumenta_myfirstmodule$stavkapopisnogdokumenta_popisnidokument', 2, 1);
CREATE TABLE "myfirstmodule$popisnidokument" (
	"id" BIGINT NOT NULL,
	"brojpopisa" INT NULL,
	"datumdokumenta" TIMESTAMP NULL,
	"datumknjizenja" TIMESTAMP NULL,
	"datumpopisa" TIMESTAMP NULL,
	"statuspopisa" VARCHAR_IGNORECASE(21) NULL,
	"myfirstmodule$popisnidokument_magacin" BIGINT NULL,
	"myfirstmodule$clan2" BIGINT NULL,
	"myfirstmodule$predsednik" BIGINT NULL,
	"myfirstmodule$clan1" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$popisnidokument_myfirstmodule$popisnidokument_magacin" ON "myfirstmodule$popisnidokument" ("myfirstmodule$popisnidokument_magacin" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$popisnidokument_myfirstmodule$clan2" ON "myfirstmodule$popisnidokument" ("myfirstmodule$clan2" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$popisnidokument_myfirstmodule$predsednik" ON "myfirstmodule$popisnidokument" ("myfirstmodule$predsednik" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$popisnidokument_myfirstmodule$clan1" ON "myfirstmodule$popisnidokument" ("myfirstmodule$clan1" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('6320db2d-53d3-44ea-8d90-5861df62e05f', 'MyFirstModule.PopisniDokument', 'myfirstmodule$popisnidokument', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('b5de7100-af32-4c5e-a0df-7e86abf6e0b8', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'brojPopisa', 'brojpopisa', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('bb218d7e-c0a9-4b1f-ac7b-593fa50c1675', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'datumDokumenta', 'datumdokumenta', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('4631ba9f-e223-4f99-b8f7-2194482e4eae', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'datumKnjizenja', 'datumknjizenja', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('ff31a88d-d46b-4019-8142-1a3fa6b8fd05', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'datumPopisa', 'datumpopisa', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('f29ee690-9f7e-4b15-822e-62e50da47b79', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'statusPopisa', 'statuspopisa', 40, 21, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('29fa9ec6-659d-3d6a-be4e-6d82c8809c6e', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'idx_myfirstmodule$popisnidokument_myfirstmodule$popisnidokument_magacin');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('29fa9ec6-659d-3d6a-be4e-6d82c8809c6e', 'db18d88a-08e7-4596-ac6d-dae605fe0456', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('567c18a2-4b32-3802-b546-6e60ca01732e', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'idx_myfirstmodule$popisnidokument_myfirstmodule$clan2');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('567c18a2-4b32-3802-b546-6e60ca01732e', 'e706cd88-39b4-438d-a838-db9d1ec090d2', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('3e6176db-8c95-3f02-abd3-c55c84524b85', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'idx_myfirstmodule$popisnidokument_myfirstmodule$predsednik');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('3e6176db-8c95-3f02-abd3-c55c84524b85', '76708fe7-bb24-41a1-b208-e020c1853473', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('bac7d7cd-aafa-3125-b3ea-dfb0e800935d', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'idx_myfirstmodule$popisnidokument_myfirstmodule$clan1');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('bac7d7cd-aafa-3125-b3ea-dfb0e800935d', '8243697d-3986-4d90-a277-19e37b35c4f2', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('db18d88a-08e7-4596-ac6d-dae605fe0456', 'MyFirstModule.PopisniDokument_Magacin', 'myfirstmodule$popisnidokument', '6320db2d-53d3-44ea-8d90-5861df62e05f', 'f8bdacae-115a-482d-8d08-47574f9272c0', 'id', 'myfirstmodule$popisnidokument_magacin', 'frn_myfirstmodule$popisnidokument_myfirstmodule$popisnidokument_magacin', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('e706cd88-39b4-438d-a838-db9d1ec090d2', 'MyFirstModule.clan2', 'myfirstmodule$popisnidokument', '6320db2d-53d3-44ea-8d90-5861df62e05f', '2005476c-b225-4c02-977a-b9bf6e894ca9', 'id', 'myfirstmodule$clan2', 'frn_myfirstmodule$popisnidokument_myfirstmodule$clan2', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('76708fe7-bb24-41a1-b208-e020c1853473', 'MyFirstModule.predsednik', 'myfirstmodule$popisnidokument', '6320db2d-53d3-44ea-8d90-5861df62e05f', '2005476c-b225-4c02-977a-b9bf6e894ca9', 'id', 'myfirstmodule$predsednik', 'frn_myfirstmodule$popisnidokument_myfirstmodule$predsednik', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('8243697d-3986-4d90-a277-19e37b35c4f2', 'MyFirstModule.clan1', 'myfirstmodule$popisnidokument', '6320db2d-53d3-44ea-8d90-5861df62e05f', '2005476c-b225-4c02-977a-b9bf6e894ca9', 'id', 'myfirstmodule$clan1', 'frn_myfirstmodule$popisnidokument_myfirstmodule$clan1', 2, 1);
CREATE TABLE "myfirstmodule$prometrobnekartice" (
	"id" BIGINT NOT NULL,
	"vrstaprometa" VARCHAR_IGNORECASE(21) NULL,
	"kolicina" INT NULL,
	"smerprometa" VARCHAR_IGNORECASE(5) NULL,
	"cena" INT NULL,
	"vrednost" INT NULL,
	"napomena" VARCHAR_IGNORECASE(200) NULL,
	"datumprometa" TIMESTAMP NULL,
	"myfirstmodule$prometrobnekartice_robnakartica" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$prometrobnekartice_myfirstmodule$prometrobnekartice_robnakartica" ON "myfirstmodule$prometrobnekartice" ("myfirstmodule$prometrobnekartice_robnakartica" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('13569267-75e5-48f9-911f-3850836274bb', 'MyFirstModule.PrometRobneKartice', 'myfirstmodule$prometrobnekartice', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('d7d5776b-e8b4-4a08-99f2-25a8fcaa7e22', '13569267-75e5-48f9-911f-3850836274bb', 'vrstaPrometa', 'vrstaprometa', 40, 21, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('f2b1ab24-5e75-4075-b719-51c6a8128ba2', '13569267-75e5-48f9-911f-3850836274bb', 'kolicina', 'kolicina', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('b10a2e67-f414-4e80-9e22-2e9672e0906c', '13569267-75e5-48f9-911f-3850836274bb', 'smerPrometa', 'smerprometa', 40, 5, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('335f6836-cff6-4e0d-ac17-19af507c3acd', '13569267-75e5-48f9-911f-3850836274bb', 'cena', 'cena', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6e3c992b-0b97-4ee0-9349-ce5bc4263a15', '13569267-75e5-48f9-911f-3850836274bb', 'vrednost', 'vrednost', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('4632b2b1-a3f6-4489-93b2-234e1907b52c', '13569267-75e5-48f9-911f-3850836274bb', 'napomena', 'napomena', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('b24d1093-f1a7-48a1-9d92-d37f6fb89e74', '13569267-75e5-48f9-911f-3850836274bb', 'datumPrometa', 'datumprometa', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('3770f11a-ce9e-3d33-b18c-20bfa008a5f0', '13569267-75e5-48f9-911f-3850836274bb', 'idx_myfirstmodule$prometrobnekartice_myfirstmodule$prometrobnekartice_robnakartica');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('3770f11a-ce9e-3d33-b18c-20bfa008a5f0', 'ac39a795-30a4-4660-a0ea-0ef9bdf5bf2e', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('ac39a795-30a4-4660-a0ea-0ef9bdf5bf2e', 'MyFirstModule.PrometRobneKartice_RobnaKartica', 'myfirstmodule$prometrobnekartice', '13569267-75e5-48f9-911f-3850836274bb', '7df7c2ec-0e85-4184-904d-e28be20102e5', 'id', 'myfirstmodule$prometrobnekartice_robnakartica', 'frn_myfirstmodule$prometrobnekartice_myfirstmodule$prometrobnekartice_robnakartica', 2, 1);
CREATE TABLE "myfirstmodule$preduzece" (
	"id" BIGINT NOT NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'MyFirstModule.Preduzece', 'myfirstmodule$preduzece', false, false);
CREATE TABLE "myfirstmodule$sluzba" (
	"id" BIGINT NOT NULL,
	"naziv" VARCHAR_IGNORECASE(200) NULL,
	"myfirstmodule$sluzba_preduzece" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$sluzba_myfirstmodule$sluzba_preduzece" ON "myfirstmodule$sluzba" ("myfirstmodule$sluzba_preduzece" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('17ff92e2-1950-4884-88f6-28d2dfb6aac4', 'MyFirstModule.Sluzba', 'myfirstmodule$sluzba', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('59768775-8064-44bb-a3eb-271d9b0625e0', '17ff92e2-1950-4884-88f6-28d2dfb6aac4', 'naziv', 'naziv', 30, 200, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('ee749c9c-4ea3-3b14-9bb6-65e991eecb1e', '17ff92e2-1950-4884-88f6-28d2dfb6aac4', 'idx_myfirstmodule$sluzba_myfirstmodule$sluzba_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('ee749c9c-4ea3-3b14-9bb6-65e991eecb1e', '98d5d596-73fa-4204-981a-a969ea5b76c7', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('98d5d596-73fa-4204-981a-a969ea5b76c7', 'MyFirstModule.Sluzba_Preduzece', 'myfirstmodule$sluzba', '17ff92e2-1950-4884-88f6-28d2dfb6aac4', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'myfirstmodule$sluzba_preduzece', 'frn_myfirstmodule$sluzba_myfirstmodule$sluzba_preduzece', 2, 1);
CREATE TABLE "myfirstmodule$poslovnagodina" (
	"id" BIGINT NOT NULL,
	"godina" INT NULL,
	"zakljucena" BOOLEAN NULL,
	"myfirstmodule$poslovnagodina_preduzece" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$poslovnagodina_myfirstmodule$poslovnagodina_preduzece" ON "myfirstmodule$poslovnagodina" ("myfirstmodule$poslovnagodina_preduzece" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('7a2371c6-62d4-404f-b08a-4e60cc8df1a8', 'MyFirstModule.PoslovnaGodina', 'myfirstmodule$poslovnagodina', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('50c730d5-6c0c-4500-b087-7405a873e534', '7a2371c6-62d4-404f-b08a-4e60cc8df1a8', 'godina', 'godina', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('d56b001c-fcb9-4d90-9578-0595eb00e4b5', '7a2371c6-62d4-404f-b08a-4e60cc8df1a8', 'zakljucena', 'zakljucena', 10, 0, 'false', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('06abdf1d-2682-33d2-83e6-6959c1d0b7d1', '7a2371c6-62d4-404f-b08a-4e60cc8df1a8', 'idx_myfirstmodule$poslovnagodina_myfirstmodule$poslovnagodina_preduzece');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('06abdf1d-2682-33d2-83e6-6959c1d0b7d1', '4b8165cc-1735-4b1f-a126-d6f48c3fcc75', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('4b8165cc-1735-4b1f-a126-d6f48c3fcc75', 'MyFirstModule.PoslovnaGodina_Preduzece', 'myfirstmodule$poslovnagodina', '7a2371c6-62d4-404f-b08a-4e60cc8df1a8', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'id', 'myfirstmodule$poslovnagodina_preduzece', 'frn_myfirstmodule$poslovnagodina_myfirstmodule$poslovnagodina_preduzece', 2, 1);
CREATE TABLE "myfirstmodule$prometnidokument" (
	"id" BIGINT NOT NULL,
	"broj" INT NULL,
	"datumdokumenta" TIMESTAMP NULL,
	"datumknjizenja" TIMESTAMP NULL,
	"status" VARCHAR_IGNORECASE(15) NULL,
	"vrstadokumenta" VARCHAR_IGNORECASE(21) NULL,
	"myfirstmodule$prometnidokument_magacin_2" BIGINT NULL,
	"myfirstmodule$prometnidokument_magacin" BIGINT NULL,
	"myfirstmodule$prometnidokument_poslovnagodina" BIGINT NULL,
	"myfirstmodule$prometnidokument_robailiusluga" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_magacin_2" ON "myfirstmodule$prometnidokument" ("myfirstmodule$prometnidokument_magacin_2" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_magacin" ON "myfirstmodule$prometnidokument" ("myfirstmodule$prometnidokument_magacin" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_poslovnagodina" ON "myfirstmodule$prometnidokument" ("myfirstmodule$prometnidokument_poslovnagodina" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_robailiusluga" ON "myfirstmodule$prometnidokument" ("myfirstmodule$prometnidokument_robailiusluga" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('d71efaf1-c220-4af2-ac4e-8cfef7390862', 'MyFirstModule.PrometniDokument', 'myfirstmodule$prometnidokument', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('76c79cce-a465-4a7c-b349-b83ca8040311', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'broj', 'broj', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('e4ae82ad-026b-4b33-a76f-9a86bdf0a246', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'datumDokumenta', 'datumdokumenta', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('d8dd9072-187b-48d4-8752-943917b38c01', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'datumKnjizenja', 'datumknjizenja', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('c90b4d84-7192-4fe2-bcd6-af13d5d7750c', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'status', 'status', 40, 15, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('f4f539af-7368-40d1-a909-eb2440b2e197', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'vrstaDokumenta', 'vrstadokumenta', 40, 21, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('cbaf258a-930b-34ca-b11b-b49fb06c58c6', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'idx_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_magacin_2');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('cbaf258a-930b-34ca-b11b-b49fb06c58c6', 'e86a7e4b-0f1b-4818-977d-4bce0f6d4bbe', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('93423877-0f25-3473-a34a-214ec11635a5', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'idx_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_magacin');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('93423877-0f25-3473-a34a-214ec11635a5', 'e626cba7-1915-4ebf-8fb9-40e8e0a02bd8', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('865d600e-ff5d-38d2-8a2c-993fbc643bab', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'idx_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_poslovnagodina');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('865d600e-ff5d-38d2-8a2c-993fbc643bab', '2334376e-029e-4695-a83e-f05313c70caf', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('eb099aeb-caf3-35ce-ab5b-a5ca88900ac2', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'idx_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_robailiusluga');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('eb099aeb-caf3-35ce-ab5b-a5ca88900ac2', '2bab5d5f-5241-4c65-8c26-3b4aa891204e', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('e86a7e4b-0f1b-4818-977d-4bce0f6d4bbe', 'MyFirstModule.PrometniDokument_Magacin_2', 'myfirstmodule$prometnidokument', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'f8bdacae-115a-482d-8d08-47574f9272c0', 'id', 'myfirstmodule$prometnidokument_magacin_2', 'frn_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_magacin_2', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('e626cba7-1915-4ebf-8fb9-40e8e0a02bd8', 'MyFirstModule.PrometniDokument_Magacin', 'myfirstmodule$prometnidokument', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'f8bdacae-115a-482d-8d08-47574f9272c0', 'id', 'myfirstmodule$prometnidokument_magacin', 'frn_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_magacin', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('2334376e-029e-4695-a83e-f05313c70caf', 'MyFirstModule.PrometniDokument_PoslovnaGodina', 'myfirstmodule$prometnidokument', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', '7a2371c6-62d4-404f-b08a-4e60cc8df1a8', 'id', 'myfirstmodule$prometnidokument_poslovnagodina', 'frn_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_poslovnagodina', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('2bab5d5f-5241-4c65-8c26-3b4aa891204e', 'MyFirstModule.PrometniDokument_RobaIliUsluga', 'myfirstmodule$prometnidokument', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'id', 'myfirstmodule$prometnidokument_robailiusluga', 'frn_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_robailiusluga', 2, 1);
CREATE TABLE "myfirstmodule$jedinicamere" (
	"id" BIGINT NOT NULL,
	"nazivjedinice" VARCHAR_IGNORECASE(200) NULL,
	"skraceninaziv" VARCHAR_IGNORECASE(200) NULL,
	"myfirstmodule$jedinicamere_robailiusluga" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$jedinicamere_myfirstmodule$jedinicamere_robailiusluga" ON "myfirstmodule$jedinicamere" ("myfirstmodule$jedinicamere_robailiusluga" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('422d59d2-0cb4-42e2-ac52-f463c15b4cad', 'MyFirstModule.JedinicaMere', 'myfirstmodule$jedinicamere', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('c03caec0-7d61-4719-9691-e1ed6d91640c', '422d59d2-0cb4-42e2-ac52-f463c15b4cad', 'nazivJedinice', 'nazivjedinice', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a50104f1-8c81-4fc6-93dd-8194ef9bd090', '422d59d2-0cb4-42e2-ac52-f463c15b4cad', 'skraceniNaziv', 'skraceninaziv', 30, 200, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('c7acd0ca-9acb-34ac-863a-da8f1ff43747', '422d59d2-0cb4-42e2-ac52-f463c15b4cad', 'idx_myfirstmodule$jedinicamere_myfirstmodule$jedinicamere_robailiusluga');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('c7acd0ca-9acb-34ac-863a-da8f1ff43747', '9c8474e7-04f3-467d-a9b0-b99a930459b4', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('9c8474e7-04f3-467d-a9b0-b99a930459b4', 'MyFirstModule.JedinicaMere_RobaIliUsluga', 'myfirstmodule$jedinicamere', '422d59d2-0cb4-42e2-ac52-f463c15b4cad', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'id', 'myfirstmodule$jedinicamere_robailiusluga', 'frn_myfirstmodule$jedinicamere_myfirstmodule$jedinicamere_robailiusluga', 2, 1);
CREATE TABLE "myfirstmodule$poslovnipartner_robailiusluga" (
	"myfirstmodule$poslovnipartnerid" BIGINT NOT NULL,
	"myfirstmodule$robailiuslugaid" BIGINT NOT NULL,
	PRIMARY KEY("myfirstmodule$poslovnipartnerid","myfirstmodule$robailiuslugaid"),
	CONSTRAINT "frn_myfirstmodule$poslovnipartner_robailiusluga_myfirstmodule$poslovnipartnerid" FOREIGN KEY ( "myfirstmodule$poslovnipartnerid" ) REFERENCES "myfirstmodule$poslovnipartner" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_myfirstmodule$poslovnipartner_robailiusluga_myfirstmodule$robailiuslugaid" FOREIGN KEY ( "myfirstmodule$robailiuslugaid" ) REFERENCES "myfirstmodule$robailiusluga" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_myfirstmodule$poslovnipartner_robailiusluga_myfirstmodule$robailiusluga_myfirstmodule$poslovnipartner" ON "myfirstmodule$poslovnipartner_robailiusluga" ("myfirstmodule$robailiuslugaid" ASC,"myfirstmodule$poslovnipartnerid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('506d0f1f-667c-45ed-94b5-0ad3d6eb0467', 'MyFirstModule.PoslovniPartner_RobaIliUsluga', 'myfirstmodule$poslovnipartner_robailiusluga', '810e9e9b-6158-4c57-9d2a-b26e8a573215', 'ec0f07a2-68c8-4eed-8c4e-5b2a316152f5', 'myfirstmodule$poslovnipartnerid', 'myfirstmodule$robailiuslugaid', 'idx_myfirstmodule$poslovnipartner_robailiusluga_myfirstmodule$robailiusluga_myfirstmodule$poslovnipartner', 'frn_myfirstmodule$poslovnipartner_robailiusluga_myfirstmodule$poslovnipartnerid', 'frn_myfirstmodule$poslovnipartner_robailiusluga_myfirstmodule$robailiuslugaid', 0, 0, 2);
CREATE TABLE "myfirstmodule$prometnidokument_poslovnipartner" (
	"myfirstmodule$prometnidokumentid" BIGINT NOT NULL,
	"myfirstmodule$poslovnipartnerid" BIGINT NOT NULL,
	PRIMARY KEY("myfirstmodule$prometnidokumentid","myfirstmodule$poslovnipartnerid"),
	CONSTRAINT "frn_myfirstmodule$prometnidokument_poslovnipartner_myfirstmodule$prometnidokumentid" FOREIGN KEY ( "myfirstmodule$prometnidokumentid" ) REFERENCES "myfirstmodule$prometnidokument" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_myfirstmodule$prometnidokument_poslovnipartner_myfirstmodule$poslovnipartnerid" FOREIGN KEY ( "myfirstmodule$poslovnipartnerid" ) REFERENCES "myfirstmodule$poslovnipartner" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_myfirstmodule$prometnidokument_poslovnipartner_myfirstmodule$poslovnipartner_myfirstmodule$prometnidokument" ON "myfirstmodule$prometnidokument_poslovnipartner" ("myfirstmodule$poslovnipartnerid" ASC,"myfirstmodule$prometnidokumentid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action", "storage_format") VALUES ('4a61335b-25d4-4fd7-9142-d1ac7547d557', 'MyFirstModule.PrometniDokument_PoslovniPartner', 'myfirstmodule$prometnidokument_poslovnipartner', 'd71efaf1-c220-4af2-ac4e-8cfef7390862', '810e9e9b-6158-4c57-9d2a-b26e8a573215', 'myfirstmodule$prometnidokumentid', 'myfirstmodule$poslovnipartnerid', 'idx_myfirstmodule$prometnidokument_poslovnipartner_myfirstmodule$poslovnipartner_myfirstmodule$prometnidokument', 'frn_myfirstmodule$prometnidokument_poslovnipartner_myfirstmodule$prometnidokumentid', 'frn_myfirstmodule$prometnidokument_poslovnipartner_myfirstmodule$poslovnipartnerid', 0, 0, 2);
ALTER TABLE "myfirstmodule$poslovnipartner" ADD CONSTRAINT "frn_myfirstmodule$poslovnipartner_myfirstmodule$poslovnipartner_preduzece" FOREIGN KEY ( "myfirstmodule$poslovnipartner_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$kategorija" ADD CONSTRAINT "frn_myfirstmodule$kategorija_myfirstmodule$kategorija_preduzece" FOREIGN KEY ( "myfirstmodule$kategorija_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$robnakartica" ADD CONSTRAINT "frn_myfirstmodule$robnakartica_myfirstmodule$robnakartica_poslovnagodina" FOREIGN KEY ( "myfirstmodule$robnakartica_poslovnagodina" ) REFERENCES "myfirstmodule$poslovnagodina" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$robnakartica" ADD CONSTRAINT "frn_myfirstmodule$robnakartica_myfirstmodule$robnakartica_magacin" FOREIGN KEY ( "myfirstmodule$robnakartica_magacin" ) REFERENCES "myfirstmodule$magacin" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$robnakartica" ADD CONSTRAINT "frn_myfirstmodule$robnakartica_myfirstmodule$robnakartica_robailiusluga" FOREIGN KEY ( "myfirstmodule$robnakartica_robailiusluga" ) REFERENCES "myfirstmodule$robailiusluga" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$magacin" ADD CONSTRAINT "frn_myfirstmodule$magacin_myfirstmodule$magacin_radnik" FOREIGN KEY ( "myfirstmodule$magacin_radnik" ) REFERENCES "myfirstmodule$radnik" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$stavkeprometnogdokumenta" ADD CONSTRAINT "frn_myfirstmodule$stavkeprometnogdokumenta_myfirstmodule$stavkeprometnogdokumenta_prometnidokument" FOREIGN KEY ( "myfirstmodule$stavkeprometnogdokumenta_prometnidokument" ) REFERENCES "myfirstmodule$prometnidokument" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$stavkeprometnogdokumenta" ADD CONSTRAINT "frn_myfirstmodule$stavkeprometnogdokumenta_myfirstmodule$stavkeprometnogdokumenta_robailiusluga" FOREIGN KEY ( "myfirstmodule$stavkeprometnogdokumenta_robailiusluga" ) REFERENCES "myfirstmodule$robailiusluga" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$radnik" ADD CONSTRAINT "frn_myfirstmodule$radnik_myfirstmodule$radnik_preduzece" FOREIGN KEY ( "myfirstmodule$radnik_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$stavkapopisnogdokumenta" ADD CONSTRAINT "frn_myfirstmodule$stavkapopisnogdokumenta_myfirstmodule$stavkapopisnogdokumenta_robailiusluga" FOREIGN KEY ( "myfirstmodule$stavkapopisnogdokumenta_robailiusluga" ) REFERENCES "myfirstmodule$robailiusluga" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$stavkapopisnogdokumenta" ADD CONSTRAINT "frn_myfirstmodule$stavkapopisnogdokumenta_myfirstmodule$stavkapopisnogdokumenta_popisnidokument" FOREIGN KEY ( "myfirstmodule$stavkapopisnogdokumenta_popisnidokument" ) REFERENCES "myfirstmodule$popisnidokument" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$popisnidokument" ADD CONSTRAINT "frn_myfirstmodule$popisnidokument_myfirstmodule$predsednik" FOREIGN KEY ( "myfirstmodule$predsednik" ) REFERENCES "myfirstmodule$radnik" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$popisnidokument" ADD CONSTRAINT "frn_myfirstmodule$popisnidokument_myfirstmodule$clan1" FOREIGN KEY ( "myfirstmodule$clan1" ) REFERENCES "myfirstmodule$radnik" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$popisnidokument" ADD CONSTRAINT "frn_myfirstmodule$popisnidokument_myfirstmodule$clan2" FOREIGN KEY ( "myfirstmodule$clan2" ) REFERENCES "myfirstmodule$radnik" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$popisnidokument" ADD CONSTRAINT "frn_myfirstmodule$popisnidokument_myfirstmodule$popisnidokument_magacin" FOREIGN KEY ( "myfirstmodule$popisnidokument_magacin" ) REFERENCES "myfirstmodule$magacin" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$prometrobnekartice" ADD CONSTRAINT "frn_myfirstmodule$prometrobnekartice_myfirstmodule$prometrobnekartice_robnakartica" FOREIGN KEY ( "myfirstmodule$prometrobnekartice_robnakartica" ) REFERENCES "myfirstmodule$robnakartica" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$sluzba" ADD CONSTRAINT "frn_myfirstmodule$sluzba_myfirstmodule$sluzba_preduzece" FOREIGN KEY ( "myfirstmodule$sluzba_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$poslovnagodina" ADD CONSTRAINT "frn_myfirstmodule$poslovnagodina_myfirstmodule$poslovnagodina_preduzece" FOREIGN KEY ( "myfirstmodule$poslovnagodina_preduzece" ) REFERENCES "myfirstmodule$preduzece" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$prometnidokument" ADD CONSTRAINT "frn_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_robailiusluga" FOREIGN KEY ( "myfirstmodule$prometnidokument_robailiusluga" ) REFERENCES "myfirstmodule$robailiusluga" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$prometnidokument" ADD CONSTRAINT "frn_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_poslovnagodina" FOREIGN KEY ( "myfirstmodule$prometnidokument_poslovnagodina" ) REFERENCES "myfirstmodule$poslovnagodina" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$prometnidokument" ADD CONSTRAINT "frn_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_magacin" FOREIGN KEY ( "myfirstmodule$prometnidokument_magacin" ) REFERENCES "myfirstmodule$magacin" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$prometnidokument" ADD CONSTRAINT "frn_myfirstmodule$prometnidokument_myfirstmodule$prometnidokument_magacin_2" FOREIGN KEY ( "myfirstmodule$prometnidokument_magacin_2" ) REFERENCES "myfirstmodule$magacin" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$jedinicamere" ADD CONSTRAINT "frn_myfirstmodule$jedinicamere_myfirstmodule$jedinicamere_robailiusluga" FOREIGN KEY ( "myfirstmodule$jedinicamere_robailiusluga" ) REFERENCES "myfirstmodule$robailiusluga" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20250829 10:00:59';
