/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `WhitelistMobile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `WhitelistWeb` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WhitelistMobile_email_key" ON "WhitelistMobile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WhitelistWeb_email_key" ON "WhitelistWeb"("email");
