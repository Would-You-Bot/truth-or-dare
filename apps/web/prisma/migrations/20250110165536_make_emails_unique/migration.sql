/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `WaitlistMobile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `WaitlistWeb` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WaitlistMobile_email_key" ON "WaitlistMobile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WaitlistWeb_email_key" ON "WaitlistWeb"("email");
