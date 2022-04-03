using Microsoft.AspNetCore.Mvc;
using Moq;
using WebApp.Controllers;
using WebApp.Infrastructure;
using WebApp.Models;
using System.Collections.Generic;
using System.Linq;
using Xunit;
 
namespace WebAppTest
{
    public class InstituteControllerTest
    {
        [Fact]
        public void Test_GET_AllInstitutes()
        {
            // Arrange
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.Institutes).Returns(Multiple());
            var controller = new InstituteController(mockRepo.Object);
 
            // Act
            var result = controller.Get();
 
            // Assert
            var model = Assert.IsAssignableFrom<IEnumerable<Institute>>(result);
            Assert.Equal(3, model.Count());
        }
 
        private static IEnumerable<Institute> Multiple()
        {
            var r = new List<Institute>();
            r.Add(new Institute()
            {
                instituteId = 01,
                instituteName = "ABC",
                instituteDescription = "Best Institute",
                instituteAddress = "Chennai",
                mobile = "9876543210",
                email = "abcinstitute@gmail.com"
            });
            r.Add(new Institute()
            {
                instituteId = 02,
                instituteName = "ABC",
                instituteDescription = "Best Institute",
                instituteAddress = "Chennai",
                mobile = "9876543210",
                email = "abcinstitute@gmail.com"
            });
            r.Add(new Institute()
            {
                instituteId = 03,
                instituteName = "ABC",
                instituteDescription = "Best Institute",
                instituteAddress = "Chennai",
                mobile = "9876543210",
                email = "abcinstitute@gmail.com"
            });
            return r;
        }

        [Fact]
        public void Test_POST_AddInstitute()
        {
            // Arrange
            Institute r = new Institute()
            {
                instituteId = 04,
                instituteName = "ABC",
                instituteDescription = "Best Institute",
                instituteAddress = "Chennai",
                mobile = "9876543210",
                email = "abcinstitute@gmail.com"
            };
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.AddInstitute(It.IsAny<Institute>())).Returns(r);
            var controller = new InstituteController(mockRepo.Object);
        
            // Act
            var result = controller.Post(r);
        
            // Assert
            var institute = Assert.IsType<Institute>(result);
            Assert.Equal(04, institute.instituteId);
            Assert.Equal("ABC", institute.instituteName);
            Assert.Equal("Best Institute", institute.instituteDescription);
            Assert.Equal("Chennai", institute.instituteAddress);
            Assert.Equal("9876543210", institute.mobile);
            Assert.Equal("abcinstitute@gmail.com", institute.email);


        }

        [Fact]
        public void Test_PUT_UpdateInstitute()
        {
            // Arrange
            Institute r = new Institute()
            {
                instituteId = 01,
                instituteName = "new ABC",
                instituteDescription = "Best Institute",
                instituteAddress = "Chennai",
                mobile = "9876543210",
                email = "abcinstitute@gmail.com"
            };
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.UpdateInstitute(It.IsAny<Institute>())).Returns(r);
            var controller = new InstituteController(mockRepo.Object);
        
            // Act
            var result = controller.Put(r);
        
            // Assert
            var institute = Assert.IsType<Institute>(result);
            Assert.Equal(01, institute.instituteId);
            Assert.Equal("new ABC", institute.instituteName);
            Assert.Equal("Best Institute", institute.instituteDescription);
            Assert.Equal("Chennai", institute.instituteAddress);
            Assert.Equal("9876543210", institute.mobile);
            Assert.Equal("abcinstitute@gmail.com", institute.email);
        }

        [Fact]
        public void Test_DELETE_Institute()
        {
            // Arrange
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.DeleteInstitute(It.IsAny<int>())).Verifiable();
            var controller = new InstituteController(mockRepo.Object);
        
            // Act
            controller.Delete(3);
        
            // Assert
            mockRepo.Verify();
        }
    }
}