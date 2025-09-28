ALTER TABLE "myfirstmodule$preduzece" ADD "pib" VARCHAR_IGNORECASE(200) NULL;
ALTER TABLE "myfirstmodule$preduzece" ADD "adresapreduzeca" VARCHAR_IGNORECASE(200) NULL;
ALTER TABLE "myfirstmodule$preduzece" ADD "nazivpreduzeca" VARCHAR_IGNORECASE(200) NULL;
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6c599560-cfec-4931-9cf1-5fb56e9cab27', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'nazivPreduzeca', 'nazivpreduzeca', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('d4c14aaf-1c59-45f6-b8c5-ec95317c4373', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'PIB', 'pib', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('2452b440-a781-4a63-88e8-195f0b7bcf35', '5a08e249-ed51-4aaf-a3ea-9ea055ce8837', 'adresaPreduzeca', 'adresapreduzeca', 30, 200, '', false);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20250928 16:44:51';
