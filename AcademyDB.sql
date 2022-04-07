USE [master]
GO
/****** Object:  Database [Academy_Backend]    Script Date: 07-04-2022 11:43:58 ******/
CREATE DATABASE [Academy_Backend]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Academy_Backend_Data', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Academy_Backend.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Academy_Backend_Log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Academy_Backend.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Academy_Backend] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Academy_Backend].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Academy_Backend] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Academy_Backend] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Academy_Backend] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Academy_Backend] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Academy_Backend] SET ARITHABORT OFF 
GO
ALTER DATABASE [Academy_Backend] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [Academy_Backend] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Academy_Backend] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Academy_Backend] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Academy_Backend] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Academy_Backend] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Academy_Backend] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Academy_Backend] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Academy_Backend] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Academy_Backend] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Academy_Backend] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Academy_Backend] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Academy_Backend] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Academy_Backend] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Academy_Backend] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Academy_Backend] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Academy_Backend] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Academy_Backend] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Academy_Backend] SET  MULTI_USER 
GO
ALTER DATABASE [Academy_Backend] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Academy_Backend] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Academy_Backend] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Academy_Backend] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Academy_Backend] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Academy_Backend] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Academy_Backend] SET QUERY_STORE = OFF
GO
USE [Academy_Backend]
GO
/****** Object:  Table [dbo].[AdminModal]    Script Date: 07-04-2022 11:43:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdminModal](
	[email] [nvarchar](30) NULL,
	[password] [nvarchar](30) NULL,
	[mobileNumber] [nvarchar](10) NULL,
	[userRole] [nvarchar](30) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CourseModal]    Script Date: 07-04-2022 11:43:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CourseModal](
	[courseId] [int] IDENTITY(1,1) NOT NULL,
	[courseName] [nvarchar](30) NULL,
	[courseDescription] [nvarchar](254) NULL,
	[courseDuration] [nvarchar](30) NULL,
	[fromDate] [date] NULL,
	[toDate] [date] NULL,
	[academyId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[courseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InstituteModal]    Script Date: 07-04-2022 11:43:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InstituteModal](
	[InstituteId] [int] IDENTITY(101,1) NOT NULL,
	[InstituteName] [nvarchar](30) NULL,
	[InstituteDescription] [nvarchar](254) NULL,
	[InstitueAddress] [nvarchar](50) NULL,
	[mobile] [nvarchar](10) NULL,
	[email] [nvarchar](30) NULL,
	[Imageurl] [nvarchar](254) NULL,
PRIMARY KEY CLUSTERED 
(
	[InstituteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LoginModal]    Script Date: 07-04-2022 11:43:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LoginModal](
	[email] [nvarchar](30) NULL,
	[password] [nvarchar](30) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RegisteredCourseModal]    Script Date: 07-04-2022 11:43:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RegisteredCourseModal](
	[studentId] [int] NULL,
	[courseId] [int] NULL,
	[academyId] [int] NULL,
	[courseName] [nvarchar](254) NULL,
	[id] [int] NOT NULL,
	[joinDate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentModal]    Script Date: 07-04-2022 11:43:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentModal](
	[studentId] [int] NOT NULL,
	[studentName] [nvarchar](30) NULL,
	[studentLastname] [nvarchar](30) NULL,
	[studentGender] [nvarchar](20) NULL,
	[studentFathername] [nvarchar](30) NULL,
	[studentMothername] [nvarchar](30) NULL,
	[studentEmail] [nvarchar](40) NULL,
	[alterMobile] [nvarchar](10) NULL,
	[studentDOB] [date] NULL,
	[mobile] [nvarchar](10) NULL,
	[houseNo] [nvarchar](10) NULL,
	[streetName] [nvarchar](50) NULL,
	[areaName] [nvarchar](50) NULL,
	[nationality] [nvarchar](30) NULL,
	[pincode] [int] NULL,
	[Age] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[studentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserModal]    Script Date: 07-04-2022 11:43:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserModal](
	[email] [nvarchar](30) NOT NULL,
	[password] [nvarchar](30) NULL,
	[username] [nvarchar](30) NULL,
	[mobileNumber] [nvarchar](10) NULL,
	[userRole] [nvarchar](30) NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CourseModal] ON 

INSERT [dbo].[CourseModal] ([courseId], [courseName], [courseDescription], [courseDuration], [fromDate], [toDate], [academyId]) VALUES (5, N'Abacus', N'Learn Abacus', N'3 months', NULL, NULL, NULL)
INSERT [dbo].[CourseModal] ([courseId], [courseName], [courseDescription], [courseDuration], [fromDate], [toDate], [academyId]) VALUES (6, N'Beginner Abacus', N'Abacus for beginners', N'3 Months', NULL, NULL, NULL)
INSERT [dbo].[CourseModal] ([courseId], [courseName], [courseDescription], [courseDuration], [fromDate], [toDate], [academyId]) VALUES (7, N'Abacus Intermediate', N'Abacus for intermediate', N'2 Months', NULL, NULL, NULL)
INSERT [dbo].[CourseModal] ([courseId], [courseName], [courseDescription], [courseDuration], [fromDate], [toDate], [academyId]) VALUES (8, N'Abacus Advance', N'Abacus for Advance level', N'3 months', NULL, NULL, NULL)
INSERT [dbo].[CourseModal] ([courseId], [courseName], [courseDescription], [courseDuration], [fromDate], [toDate], [academyId]) VALUES (9, N'Abc 2 for abacus', N'Abacus for kids', N'3 months', NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[CourseModal] OFF
GO
SET IDENTITY_INSERT [dbo].[InstituteModal] ON 

INSERT [dbo].[InstituteModal] ([InstituteId], [InstituteName], [InstituteDescription], [InstitueAddress], [mobile], [email], [Imageurl]) VALUES (107, N'Abc center', N'Learn Abacus', N'Banglore', N'9894275788', N'Abc@gmail.com', N'https://i.ytimg.com/vi/WFo3bz6vczQ/maxresdefault.jpg')
INSERT [dbo].[InstituteModal] ([InstituteId], [InstituteName], [InstituteDescription], [InstitueAddress], [mobile], [email], [Imageurl]) VALUES (108, N'Abacus Tri', N'Abacus for beginners', N'Trichy', N'9843325890', N'AbacusTrichy@gmail.com', N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzdGN09WZIQMaGQOO8fOALPuDLVLqaNX3gg&usqp=CAU')
INSERT [dbo].[InstituteModal] ([InstituteId], [InstituteName], [InstituteDescription], [InstitueAddress], [mobile], [email], [Imageurl]) VALUES (112, N'Abacus', N'Learn Abacus', N'Banglore', N'9894426260', N'Abacus@gmail.com', N'https://media.npr.org/assets/img/2014/11/06/abacus_slide-ec37716f00e80ac18069912b96a6c2b6d98e2327.jpg')
INSERT [dbo].[InstituteModal] ([InstituteId], [InstituteName], [InstituteDescription], [InstitueAddress], [mobile], [email], [Imageurl]) VALUES (114, N'Abacus center', N'Abacus', N'Banglore', N'9894436360', N'AbacusCenter@gmail.com', N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS20CQexyL_bPvWLkU_FrA-LmnaB0nQaRRMw&usqp=CAU')
INSERT [dbo].[InstituteModal] ([InstituteId], [InstituteName], [InstituteDescription], [InstitueAddress], [mobile], [email], [Imageurl]) VALUES (115, N'Abc center 2', N'Abc', N'Ooty', N'9894275788', N'Abc2@gmail.com', N'https://i.ytimg.com/vi/WFo3bz6vczQ/maxresdefault.jpg')
SET IDENTITY_INSERT [dbo].[InstituteModal] OFF
GO
INSERT [dbo].[RegisteredCourseModal] ([studentId], [courseId], [academyId], [courseName], [id], [joinDate]) VALUES (1, 5, 101, N'Abacus', 1, CAST(N'2022-03-30' AS Date))
INSERT [dbo].[RegisteredCourseModal] ([studentId], [courseId], [academyId], [courseName], [id], [joinDate]) VALUES (2, 6, 102, N'Abacus Beginner', 2, CAST(N'2022-03-30' AS Date))
GO
INSERT [dbo].[StudentModal] ([studentId], [studentName], [studentLastname], [studentGender], [studentFathername], [studentMothername], [studentEmail], [alterMobile], [studentDOB], [mobile], [houseNo], [streetName], [areaName], [nationality], [pincode], [Age]) VALUES (1, N'Partha', N'G', N'Male', N'Govindarajan', N'Ishwarya', N'Partha@12', N'9894257890', CAST(N'2022-03-24' AS Date), N'9843325899', N'325', N'Vallalar Nagar', N'Housing Board', N'Indian', 636008, 19)
GO
SET IDENTITY_INSERT [dbo].[UserModal] ON 

INSERT [dbo].[UserModal] ([email], [password], [username], [mobileNumber], [userRole], [Id]) VALUES (N'2k18cse046@kiot.ac.in', N'Kokila@46', N'Kokila', N'9843325893', N'Admin', 3)
INSERT [dbo].[UserModal] ([email], [password], [username], [mobileNumber], [userRole], [Id]) VALUES (N'2k18cse060@kiot.ac.in', N'Partha!12', N'test', N'9843325890', N'User', 2)
INSERT [dbo].[UserModal] ([email], [password], [username], [mobileNumber], [userRole], [Id]) VALUES (N'2k18cse062@kiot.ac.in', N'Partha@12', N'Partha', N'9843325899', N'User', 1)
SET IDENTITY_INSERT [dbo].[UserModal] OFF
GO
USE [master]
GO
ALTER DATABASE [Academy_Backend] SET  READ_WRITE 
GO
