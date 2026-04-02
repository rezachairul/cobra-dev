-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `githubUrl` VARCHAR(191) NULL,
    `liveUrl` VARCHAR(191) NULL,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Project_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Technology` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectTechnology` (
    `projectId` INTEGER NOT NULL,
    `technologyId` INTEGER NOT NULL,

    PRIMARY KEY (`projectId`, `technologyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProjectTechnology` ADD CONSTRAINT `ProjectTechnology_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTechnology` ADD CONSTRAINT `ProjectTechnology_technologyId_fkey` FOREIGN KEY (`technologyId`) REFERENCES `Technology`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
