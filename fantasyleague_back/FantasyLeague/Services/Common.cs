using FantasyLeague.Models;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace FantasyLeague.Services
{
    public interface ICommon
    {
        public string EncryptString(string toEncrypt, string securityKey);
        public string DecryptString(string cipherString, string securityKey);
        public string GeTemplate(string path);
        public void SendSupportMail(string to, string subject, string msg, string cc);
    }
    public class Common: ICommon
    {
        private readonly AppSettings _appSettings;

        public Common(IOptions<AppSettings> settings)
        {
            _appSettings = settings.Value;
        }
        public string GeTemplate(string path)
        {
            
            return File.ReadAllText(path);
        }
        /// <summary>
        /// method to emcrypt text
        /// </summary>
        /// <param name="toEncrypt">string to encrypt</param>
        /// <param name="securityKey">encryption key</param>
        /// <returns></returns>
        public string EncryptString(string toEncrypt, string securityKey)
        {
            var t = Convert.FromBase64String(securityKey);

            var tdes = new TripleDESCryptoServiceProvider
            {
                Key = t,
                Mode = CipherMode.ECB,
                Padding = PaddingMode.PKCS7
            };

            var cTransform = tdes.CreateEncryptor();
            var toEncryptArray = Encoding.UTF8.GetBytes(toEncrypt);
            var resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
            tdes.Clear();
            return Convert.ToBase64String(resultArray, 0, resultArray.Length);
        }
        /// <summary>
        /// method to decrypt text
        /// </summary>
        /// <param name="cipherString">string to decrypt</param>
        /// <param name="securityKey">decryption key</param>
        /// <returns></returns>
        public string DecryptString(string cipherString, string securityKey)
        {
            var t = Convert.FromBase64String(securityKey);
            var tdes = new TripleDESCryptoServiceProvider
            {
                Key = t,
                Mode = CipherMode.ECB,
                Padding = PaddingMode.PKCS7
            };

            var cTransform = tdes.CreateDecryptor();
            var toEncryptArray = Convert.FromBase64String(cipherString);
            var resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
            tdes.Clear();
            return Encoding.UTF8.GetString(resultArray);
        }

        public void SendSupportMail(string to, string subject, string msg, string cc)
        {
            try
            {

                string SenderEmailAddress = _appSettings.SenderEmailAddress;
                string SenderEmailPassword = _appSettings.SenderEmailPassword;
                string SenderSMTPServer = _appSettings.SenderSMTPServer;
                int Port = Convert.ToInt32(_appSettings.Port);
                bool IsSsl = Convert.ToBoolean(_appSettings.IsSsl);
                string DisplayName = _appSettings.DisplayName;
                bool IsLive = Convert.ToBoolean(_appSettings.IsLive);
                MailMessage message = new MailMessage();
                string[] addresses = to.Split(';');
                foreach (string address in addresses)
                {
                    message.To.Add(new MailAddress(address));
                }
                if (IsLive == false)
                {

                }
                message.From = new MailAddress(SenderEmailAddress, DisplayName);
                message.Subject = subject;
                message.Body = msg;
                message.IsBodyHtml = true;
                SmtpClient client = new SmtpClient();
                client.Host = SenderSMTPServer;
                if (Port > 0)
                    client.Port = Port;
                client.UseDefaultCredentials = false;
                System.Net.NetworkCredential nc = new System.Net.NetworkCredential(SenderEmailAddress, SenderEmailPassword);
                client.EnableSsl = IsSsl;
                client.Credentials = nc;
                client.Send(message);

            }
            catch (Exception ex)
            {

                //throw;
            }
        }
    }
}