USE [master]
GO
/****** Object:  Database [ticarixx]    Script Date: 19.08.2019 15:14:23 ******/
CREATE DATABASE [ticarix]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ticarix', FILENAME = N'D:\NetBilisim\SqlData\ticarix.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'ticarix_log', FILENAME = N'D:\NetBilisim\SqlData\ticarix_log.ldf' , SIZE = 1536KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [ticarix] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ticarix].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ticarix] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ticarix] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ticarix] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ticarix] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ticarix] SET ARITHABORT OFF 
GO
ALTER DATABASE [ticarix] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ticarix] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [ticarix] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ticarix] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ticarix] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ticarix] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ticarix] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ticarix] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ticarix] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ticarix] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ticarix] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ticarix] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ticarix] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ticarix] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ticarix] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ticarix] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ticarix] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ticarix] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ticarix] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ticarix] SET  MULTI_USER 
GO
ALTER DATABASE [ticarix] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ticarix] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ticarix] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ticarix] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [ticarix]
GO
/****** Object:  Table [dbo].[tbl_account]    Script Date: 19.08.2019 15:14:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_account](
	[rid] [bigint] IDENTITY(1,1) NOT NULL,
	[acc_date_added] [datetime] NULL,
	[acc_user_added] [bigint] NULL,
	[acc_date_updated] [datetime] NULL,
	[acc_user_updated] [bigint] NULL,
	[acc_code] [nvarchar](30) NOT NULL,
	[acc_name] [nvarchar](100) NOT NULL,
	[acc_type] [int] NOT NULL,
	[acc_owner_name] [nvarchar](50) NULL,
	[acc_owner_surname] [nvarchar](50) NULL,
	[acc_contact_name] [nvarchar](30) NULL,
	[acc_is_customer] [int] NOT NULL,
	[acc_is_supplier] [int] NOT NULL,
	[acc_is_dealer] [int] NOT NULL,
	[acc_invoice_address] [nvarchar](200) NULL,
	[acc_invoice_county] [nvarchar](30) NULL,
	[acc_invoice_city] [nvarchar](30) NULL,
	[acc_invoice_country] [nvarchar](30) NULL,
	[acc_delivery_address] [nvarchar](200) NULL,
	[acc_delivery_county] [nvarchar](30) NULL,
	[acc_delivery_city] [nvarchar](30) NULL,
	[acc_delivery_country] [nvarchar](30) NULL,
	[acc_tax_office_name] [nvarchar](30) NULL,
	[acc_tax_office_number] [nvarchar](30) NULL,
	[acc_phone_1] [nvarchar](20) NULL,
	[acc_phone_2] [nvarchar](20) NULL,
	[acc_fax_number] [nvarchar](20) NULL,
	[acc_gsm_1] [nvarchar](20) NULL,
	[acc_gsm_2] [nvarchar](20) NULL,
	[acc_email_1] [nvarchar](50) NULL,
	[acc_email_2] [nvarchar](50) NULL,
	[acc_einvoice_email] [nvarchar](50) NULL,
	[acc_web_site] [nvarchar](50) NULL,
	[acc_spec_code_1] [nvarchar](50) NULL,
	[acc_spec_code_2] [nvarchar](50) NULL,
	[acc_spec_code_3] [nvarchar](50) NULL,
	[acc_spec_code_4] [nvarchar](50) NULL,
	[acc_spec_code_5] [nvarchar](50) NULL,
	[acc_explanation] [nvarchar](max) NULL,
	[acc_payment_option] [int] NULL,
	[acc_lock_date] [datetime] NULL,
 CONSTRAINT [PK_tbl_account] PRIMARY KEY CLUSTERED 
(
	[rid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
USE [master]
GO
ALTER DATABASE [ticarix] SET  READ_WRITE 
GO
