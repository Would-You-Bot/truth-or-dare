/*
  Warnings:

  - You are about to drop the `WaitlistMobile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WaitlistWeb` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "WaitlistMobile";

-- DropTable
DROP TABLE "WaitlistWeb";

-- CreateTable
CREATE TABLE "Waitlist" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Waitlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Waitlist_email_key" ON "Waitlist"("email");
