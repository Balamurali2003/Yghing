-- ==============================================================================
-- Y.G ASAFOETIDA — PRODUCTION CPANEL MYSQL RELATIONAL SCHEMA
-- Engine: InnoDB (Full ACID Transaction & Concurrent Row-Locking Support)
-- Collation: utf8mb4_unicode_ci (Full Unicode & Multilingual Support)
-- ==============================================================================

SET FOREIGN_KEY_CHECKS = 0;

-- 1. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS `categories` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `label` VARCHAR(128) NOT NULL,
  `sort_order` INT NOT NULL DEFAULT 0,
  `created_at` BIGINT NOT NULL DEFAULT 0,
  INDEX `idx_categories_sort` (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS `products` (
  `slug` VARCHAR(128) NOT NULL PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `tagline` VARCHAR(255) DEFAULT '',
  `format` VARCHAR(64) NOT NULL,
  `gluten_free` TINYINT(1) NOT NULL DEFAULT 0,
  `bestseller` TINYINT(1) NOT NULL DEFAULT 0,
  `image` VARCHAR(255) NOT NULL,
  `gallery` LONGTEXT DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `ingredients` TEXT DEFAULT NULL,
  `usage_instructions` TEXT DEFAULT NULL,
  `shelf_life` VARCHAR(64) DEFAULT '18 months from packing',
  `in_stock` TINYINT(1) NOT NULL DEFAULT 1,
  `stock_left` INT DEFAULT NULL,
  `rating` DECIMAL(2,1) NOT NULL DEFAULT 4.8,
  `reviews` INT NOT NULL DEFAULT 42,
  `created_at` BIGINT NOT NULL,
  `updated_at` BIGINT NOT NULL,
  INDEX `idx_products_format` (`format`),
  INDEX `idx_products_in_stock` (`in_stock`),
  INDEX `idx_products_bestseller` (`bestseller`),
  INDEX `idx_products_rating` (`rating`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. PRODUCT VARIANTS & PRICING TABLE (Transactional Stock Controls)
CREATE TABLE IF NOT EXISTS `product_variants` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `product_slug` VARCHAR(128) NOT NULL,
  `label` VARCHAR(64) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `mrp` DECIMAL(10,2) DEFAULT NULL,
  `stock` INT NOT NULL DEFAULT 50,
  `sort_order` INT NOT NULL DEFAULT 0,
  INDEX `idx_variants_slug` (`product_slug`),
  INDEX `idx_variants_stock` (`stock`),
  CONSTRAINT `fk_variants_product` FOREIGN KEY (`product_slug`) REFERENCES `products` (`slug`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. ORDERS TABLE
CREATE TABLE IF NOT EXISTS `orders` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `order_number` VARCHAR(32) NOT NULL UNIQUE,
  `customer_name` VARCHAR(128) NOT NULL,
  `customer_email` VARCHAR(191) NOT NULL,
  `customer_phone` VARCHAR(32) NOT NULL,
  `shipping_address` LONGTEXT NOT NULL,
  `subtotal` DECIMAL(10,2) NOT NULL,
  `discount` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `shipping_fee` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `total` DECIMAL(10,2) NOT NULL,
  `payment_method` VARCHAR(32) NOT NULL DEFAULT 'cod',
  `payment_status` VARCHAR(32) NOT NULL DEFAULT 'pending',
  `order_status` VARCHAR(32) NOT NULL DEFAULT 'placed',
  `delivery_type` VARCHAR(32) NOT NULL DEFAULT 'standard',
  `promo_code` VARCHAR(64) DEFAULT NULL,
  `tracking_number` VARCHAR(64) DEFAULT NULL,
  `resolution_json` TEXT DEFAULT NULL,
  `created_at` BIGINT NOT NULL,
  `updated_at` BIGINT DEFAULT NULL,
  INDEX `idx_orders_status` (`order_status`),
  INDEX `idx_orders_customer_email` (`customer_email`),
  INDEX `idx_orders_payment_status` (`payment_status`),
  INDEX `idx_orders_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. ORDER ITEMS TABLE (Line item breakdown)
CREATE TABLE IF NOT EXISTS `order_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `order_id` VARCHAR(64) NOT NULL,
  `product_slug` VARCHAR(128) NOT NULL,
  `variant_id` VARCHAR(64) NOT NULL,
  `product_name` VARCHAR(255) NOT NULL,
  `variant_label` VARCHAR(64) NOT NULL,
  `qty` INT NOT NULL,
  `unit_price` DECIMAL(10,2) NOT NULL,
  `total_price` DECIMAL(10,2) NOT NULL,
  INDEX `idx_items_order_id` (`order_id`),
  INDEX `idx_items_product_slug` (`product_slug`),
  CONSTRAINT `fk_items_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. CUSTOMER INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS `inquiries` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `reference_no` VARCHAR(32) NOT NULL UNIQUE,
  `name` VARCHAR(128) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `phone` VARCHAR(32) DEFAULT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `category` VARCHAR(64) DEFAULT 'General Inquiry',
  `message` TEXT NOT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'unread',
  `is_read` TINYINT(1) NOT NULL DEFAULT 0,
  `admin_notes` TEXT DEFAULT NULL,
  `reply_text` TEXT DEFAULT NULL,
  `replied_at` BIGINT DEFAULT NULL,
  `replied_by` VARCHAR(64) DEFAULT NULL,
  `created_at` BIGINT NOT NULL,
  `updated_at` BIGINT DEFAULT NULL,
  INDEX `idx_inquiries_email` (`email`),
  INDEX `idx_inquiries_status` (`status`),
  INDEX `idx_inquiries_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. ADMIN USERS & RBAC TABLE
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `username` VARCHAR(64) NOT NULL UNIQUE,
  `email` VARCHAR(191) NOT NULL UNIQUE,
  `name` VARCHAR(128) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `salt` VARCHAR(64) NOT NULL,
  `role` VARCHAR(32) NOT NULL DEFAULT 'Admin',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `last_login` BIGINT DEFAULT NULL,
  `created_at` BIGINT NOT NULL,
  `updated_at` BIGINT DEFAULT NULL,
  INDEX `idx_admin_users_role` (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. EXPORT DEALS TABLE
CREATE TABLE IF NOT EXISTS `export_deals` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `company_name` VARCHAR(191) NOT NULL,
  `contact_person` VARCHAR(128) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `phone` VARCHAR(32) DEFAULT NULL,
  `destination_country` VARCHAR(128) NOT NULL,
  `port_of_delivery` VARCHAR(128) NOT NULL,
  `products_requested` TEXT NOT NULL,
  `volume_kg` INT NOT NULL,
  `container_type` VARCHAR(64) NOT NULL,
  `incoterm` VARCHAR(16) NOT NULL,
  `currency` VARCHAR(8) DEFAULT 'USD',
  `estimated_value` DECIMAL(12,2) NOT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'new_inquiry',
  `spices_board_cert` TINYINT(1) DEFAULT 1,
  `iso22000_cert` TINYINT(1) DEFAULT 1,
  `notes` TEXT DEFAULT NULL,
  `created_at` BIGINT NOT NULL,
  `updated_at` BIGINT DEFAULT NULL,
  INDEX `idx_export_country` (`destination_country`),
  INDEX `idx_export_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. CALCULATION METRICS TABLE
CREATE TABLE IF NOT EXISTS `calculation_metrics` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `product_slug` VARCHAR(128) NOT NULL,
  `product_name` VARCHAR(191) NOT NULL,
  `batch_size_kg` DECIMAL(10,2) NOT NULL,
  `raw_resin_cost` DECIMAL(10,2) NOT NULL,
  `carrier_starch_cost` DECIMAL(10,2) NOT NULL,
  `milling_cost` DECIMAL(10,2) NOT NULL,
  `packaging_cost` DECIMAL(10,2) NOT NULL,
  `labor_overhead` DECIMAL(10,2) NOT NULL,
  `target_margin_pct` DECIMAL(5,2) NOT NULL,
  `calculated_mrp` DECIMAL(10,2) NOT NULL,
  `notes` TEXT DEFAULT NULL,
  `updated_at` BIGINT NOT NULL,
  INDEX `idx_metrics_product` (`product_slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. AUDIT LOGS TABLE
CREATE TABLE IF NOT EXISTS `audit_logs` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `admin` VARCHAR(64) NOT NULL,
  `action` VARCHAR(64) NOT NULL,
  `resource` VARCHAR(64) NOT NULL,
  `details` TEXT DEFAULT NULL,
  `timestamp` BIGINT NOT NULL,
  INDEX `idx_audit_timestamp` (`timestamp`),
  INDEX `idx_audit_admin` (`admin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 11. REVIEWS TABLE
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `product_slug` VARCHAR(128) NOT NULL,
  `user_name` VARCHAR(128) NOT NULL,
  `user_email` VARCHAR(191) NOT NULL,
  `rating` INT NOT NULL DEFAULT 5,
  `headline` VARCHAR(255) NOT NULL,
  `review_text` TEXT NOT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'approved',
  `created_at` BIGINT NOT NULL,
  INDEX `idx_reviews_slug` (`product_slug`),
  INDEX `idx_reviews_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 12. QUESTIONS & ANSWERS TABLE
CREATE TABLE IF NOT EXISTS `questions` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `product_slug` VARCHAR(128) NOT NULL,
  `question` TEXT NOT NULL,
  `asked_by` VARCHAR(128) NOT NULL,
  `answer` TEXT DEFAULT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'pending',
  `created_at` BIGINT NOT NULL,
  INDEX `idx_questions_slug` (`product_slug`),
  INDEX `idx_questions_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 13. SUPPORT TICKETS TABLE
CREATE TABLE IF NOT EXISTS `tickets` (
  `id` VARCHAR(64) NOT NULL PRIMARY KEY,
  `contact` VARCHAR(191) NOT NULL,
  `topic` VARCHAR(128) NOT NULL,
  `message` TEXT NOT NULL,
  `status` VARCHAR(32) NOT NULL DEFAULT 'open',
  `reply` TEXT DEFAULT NULL,
  `created_at` BIGINT NOT NULL,
  INDEX `idx_tickets_status` (`status`),
  INDEX `idx_tickets_contact` (`contact`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 14. PROMO CODES TABLE
CREATE TABLE IF NOT EXISTS `promos` (
  `code` VARCHAR(64) NOT NULL PRIMARY KEY,
  `label` VARCHAR(128) NOT NULL,
  `description` TEXT DEFAULT NULL,
  `percent_off` DECIMAL(5,2) NOT NULL DEFAULT 0.00,
  `amount_off` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `min_subtotal` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `free_shipping` TINYINT(1) NOT NULL DEFAULT 0,
  `automatic` TINYINT(1) NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 15. STORE SETTINGS & CMS KEY-VALUE TABLE
CREATE TABLE IF NOT EXISTS `store_settings` (
  `setting_key` VARCHAR(64) NOT NULL PRIMARY KEY,
  `setting_value` LONGTEXT NOT NULL,
  `updated_at` BIGINT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
